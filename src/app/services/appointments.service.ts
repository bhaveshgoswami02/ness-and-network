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
export class AppointmentsService {
  collection = "appointments"
  constructor(public db: AngularFirestore, public storage: StorageService, public router: Router, public common: CommonService,public auth:AuthService) { }

  async add(data:any) {
    this.common.showLoader()
    let timestamp = firebase.firestore.Timestamp.now()
    data.timestamp = timestamp
    data.uid = this.auth.getUid()
    let id = await this.common.generateId()
    return this.db.collection(this.collection).doc(id).set(data).then(res => {
      let path = this.collection + "/" + id + "/" + this.collection
      return res;
    }).catch(err => {
      this.common.showToast("error", "", err)
      return err;
    }).finally(() => {
      this.router.navigateByUrl("/"+this.collection)
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

  update(id:string, data:any) {
    this.common.showLoader()
    let path = this.collection + "/" + id + "/" + this.collection;
    return this.db.collection(this.collection).doc(id).update(data).then(res => {
      return res
    }).catch(err => {
      this.common.showToast("error", "Error", err)
      return err;
    }).finally(() => {
      this.router.navigateByUrl("/"+this.collection)
      this.common.showToast("success", "Successful", "Appointment Updated!")
      this.common.stopLoader()
    })
  }

  delete(id:any) {
    this.common.showLoader()
    let path = this.collection + "/" + id + "/" + this.collection;
    return this.db.collection(this.collection).doc(id).delete().then(res => {
      // this.storage.deleteImage(path);
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
