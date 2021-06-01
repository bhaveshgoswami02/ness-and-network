import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CommonService } from './common.service';
import { StorageService } from './storage.service';
import { map } from 'rxjs/operators';
import firebase from 'firebase';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  collection: string = "documents";
  sub_collection: string = "documents";

  constructor(public db: AngularFirestore, public storage: StorageService, public router: Router, public common: CommonService,public auth:AuthService) { }

  async add(data: any, Img?: any, multipleImageFiles?: any) {
    this.common.showLoader()
    let timestamp = firebase.firestore.Timestamp.now()
    data.timestamp = timestamp
    data.uid = this.auth.getUid()
    let id = await this.common.generateId()
    return this.db.collection(this.collection).doc(id).set(data).then(res => {
      this.router.navigateByUrl("/" + this.collection)
      let path = this.collection + "/" + id + "/" + this.collection
      if (Img) {
        this.storage.upload(path, Img).then(imgUrl => {
          this.update(id, { imgUrl: imgUrl })
        }).catch(err => {
          console.log(err)
        })
      }
      if (multipleImageFiles) {
        this.multipleUpload(multipleImageFiles, id)
      }
      return res;
    }).catch(err => {
      this.common.showToast("error", "", err)
      return err;
    }).finally(() => {
      this.common.showToast("success", "", "Added Successful!")
      this.common.stopLoader()
    })
  }

  multipleUpload(files: any, id: string) {
    if (files) {
      for (var i = 0; i < files.length; i++) {
        const file = files[i]
        const date = new Date()
        const path = id + "/" + this.sub_collection + "/" + date.toString() + i
        this.uploadMultipleImg(file, path, id)
      }
    }
  }

  uploadMultipleImg(file: any, path: string, id: string) {
    return this.storage.upload(path, file).then(url => {
      this.db.collection(this.collection).doc(id).collection(this.sub_collection).add({ imgPath: path, imgUrl: url })
    })
  }


  getAll() {
    return this.db.collection(this.collection,ref=>ref.orderBy("timestamp","desc")).get().pipe(
      map(actions => actions.docs.map(a => {
        const data = a.data() as any;
        const id = a.id;
        return { id, ...data };
      }))
    )
  }

  getSingle(id: string) {
    return this.db.collection(this.collection).doc(id).get().pipe(
      map(a => {
        const data = a.data() as any;
        const id = a.id;
        return { id, ...data };
      })
    )
  }

  update(id: string, data: any, img?: any, multipleImageFiles?: any) {
    this.common.showLoader()
    let path = this.collection + "/" + id + "/" + this.collection;
    if (multipleImageFiles) {
      this.multipleUpload(multipleImageFiles, id)
    }
    if (img) {
      return this.storage.upload(path, img).then(newUrl => {
        this.update(id, { imgUrl: newUrl, ...data });
      }).catch(err => {
        this.common.showToast("error", "Error", err)
      }).finally(() => {
        this.common.stopLoader()
        this.router.navigateByUrl("/" + this.collection)
      })
    } else {
      return this.db.collection(this.collection).doc(id).update(data).then(res => {
        return res
      }).catch(err => {
        this.common.showToast("error", "Error", err)
        return err;
      }).finally(() => {
        this.router.navigateByUrl("/" + this.collection)
        this.common.showToast("success", "Successful", "Banner Updated!")
        this.common.stopLoader()
      })
    }
  }

  delete(id: string) {
    this.common.showLoader()
    let path = this.collection + "/" + id + "/" + this.sub_collection;
    this.db.collection(this.collection).doc(id).collection(this.sub_collection).get().pipe(
      map(actions => actions.docs.map(a => {
        const data = a.data() as any;
        const id = a.id;
        return { id, ...data };
      }))
    ).subscribe(res => {
      console.log("subscribe run")
      let data = res
      data.forEach(e => {
        this.deleteMultipleDocument(id, e.id, e.imgPath)
      })
      return this.db.collection(this.collection).doc(id).delete().then(res => {
        this.storage.deleteImage(path);
        return res
      }).catch(err => {
        this.common.showToast("error", "", err)
      }).finally(() => {
        this.common.showToast("error", "", "Deleted!")
        this.common.stopLoader()
      })
    })
  }

  // Multiple documents functions

  deleteMultipleDocument(collectionId: any, sub_collectionId:any,filePath: any) {
    this.common.showLoader()
    console.log("filePath", filePath, "collectionId", collectionId, "sub_collectionId", sub_collectionId)
    if (filePath) {
      this.storage.deleteImage(filePath).then(res => {
        console.log("imageDeleted")
      })
      this.db.collection(this.collection).doc(collectionId).collection(this.sub_collection).doc(sub_collectionId).delete().then(res => {
        console.log("then run")
      }).catch(err => {
        this.common.showToast("error", "", err)
      }).finally(() => {
        this.common.showToast("error", "", "Deleted!")
        this.common.stopLoader()
      })
    }
  }

  getSubCollectionData(id:any) {
    return this.db.collection(this.collection).doc(id).collection(this.sub_collection).get().pipe(
      map(actions => actions.docs.map(a => {
        const data = a.data() as any;
        const id = a.id;
        return { id, ...data };
      }))
    )
  }

}
