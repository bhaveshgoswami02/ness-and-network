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
export class PlayersService {
  collection = "players"
  constructor(public db: AngularFirestore, public storage: StorageService, public router: Router, public common: CommonService,public auth:AuthService) { }

  async add(data:any, Img?:any) {
    this.common.showLoader()
    let timestamp = firebase.firestore.Timestamp.now()
    data.timestamp = timestamp
    data.uid = this.auth.getUid()
    let id = await this.common.generateId()
    return this.db.collection(this.collection).doc(id).set(data).then(res => {
      let path = this.collection + "/" + id + "/" + this.collection
      if (Img) {
        this.storage.upload(path, Img).then(imgUrl => {
          this.update(id, { imgUrl: imgUrl })
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

  getAll() {
    return this.db.collection(this.collection,ref=>ref.orderBy("timestamp","desc")).get().pipe(
      map(actions => actions.docs.map(a => {
        const data = a.data() as any;
        const id = a.id;
        return { id, ...data };
      }))
    )
  }

  getSingle(id:string) {
    return this.db.collection(this.collection).doc(id).get().pipe(
      map(a => {
        const data = a.data() as any;
        const id = a.id;
        return { id, ...data };
      })
    )
  }

  update(id:string, data:any, img?:any) {
    this.common.showLoader()
    let path = this.collection + "/" + id + "/" + this.collection;
    if (img) {
      return this.storage.upload(path, img).then(newUrl => {
        this.update(id, { imgUrl: newUrl, ...data });
      }).catch(err => {
        this.common.showToast("error", "Error", err)
      }).finally(() => {
        this.common.stopLoader()
        this.router.navigateByUrl("/"+this.collection)
      })
    } else {
      return this.db.collection(this.collection).doc(id).update(data).then(res => {
        return res
      }).catch(err => {
        this.common.showToast("error", "Error", err)
        return err;
      }).finally(() => {
        this.router.navigateByUrl("/"+this.collection)
        this.common.showToast("success", "Successful", "Banner Updated!")
        this.common.stopLoader()
      })
    }
  }

  delete(id:any) {
    this.common.showLoader()
    let path = this.collection + "/" + id + "/" + this.collection;
    return this.db.collection(this.collection).doc(id).delete().then(res => {
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
