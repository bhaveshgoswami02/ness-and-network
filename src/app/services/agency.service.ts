import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CommonService } from './common.service';
import { StorageService } from './storage.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(public db: AngularFirestore, public storage: StorageService, public router: Router, public common: CommonService) { }

  add(collection:string,data:any, Img?:any) {
    this.common.showLoader()
    return this.db.collection(collection).add(data).then(res => {
      let path = collection + "/" + res.id + "/" + collection
      if (Img) {
        this.storage.upload(path, Img).then(imgUrl => {
          this.update(collection,res.id, { imgUrl: imgUrl })
        }).catch(err => {
          console.log(err)
        })
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

  getAll(collection:string) {
    return this.db.collection(collection).get().pipe(
      map(actions => actions.docs.map(a => {
        const data = a.data() as any;
        const id = a.id;
        return { id, ...data };
      }))
    )
  }
  // getAll(collection:string) {
  //   return this.db.collection(collection).snapshotChanges().pipe(
  //     map(actions => actions.map(a => {
  //       const data = a.payload.doc.data() as any;
  //       const id = a.payload.doc.id;
  //       return { id, ...data };
  //     }))
  //   );
  // }

  getSingle(collection:string,id:string) {
    return this.db.collection(collection).doc(id).get().pipe(
      map(a => {
        const data = a.data() as any;
        const id = a.id;
        return { id, ...data };
      })
    )
  }

  update(collection:string,id:string, data:any, img?:any) {
    this.common.showLoader()
    let path = collection + "/" + id + "/" + collection;
    if (img) {
      return this.storage.upload(path, img).then(newUrl => {
        this.update(collection,id, { imgUrl: newUrl, ...data });
      }).catch(err => {
        this.common.showToast("error", "Error", err)
      }).finally(() => {
        this.common.stopLoader()
        this.router.navigateByUrl("/"+collection)
      })
    } else {
      return this.db.collection(collection).doc(id).update(data).then(res => {
        return res
      }).catch(err => {
        this.common.showToast("error", "Error", err)
        return err;
      }).finally(() => {
        this.router.navigateByUrl("/"+collection)
        this.common.showToast("success", "Successful", "Banner Updated!")
        this.common.stopLoader()
      })
    }
  }

  delete(collection:any,id:any) {
    this.common.showLoader()
    let path = collection + "/" + id + "/" + collection;
    return this.db.collection(collection).doc(id).delete().then(res => {
      this.storage.deleteImage(path);
      return res
    }).catch(err => {
      console.log(err)
      this.common.showToast("error", "", err)
    }).finally(() => {
      this.common.showToast("error", "", "Deleted!")
      this.common.stopLoader()
    })
  }

}
