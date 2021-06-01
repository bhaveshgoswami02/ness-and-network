import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CommonService } from './common.service';
import { StorageService } from './storage.service';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SubAdminService {
  collection:string = "sub-admin"
  email:string = ""

  constructor(public db: AngularFirestore, public afauth: AngularFireAuth, public storage: StorageService, public router: Router, public common: CommonService,public auth:AuthService) { }

  createUser(data:any) {
    this.common.showLoader()
    let timestamp = firebase.firestore.Timestamp.now()
    data.timestamp = timestamp
    data.isBlocked = false
    this.afauth.createUserWithEmailAndPassword(data.email, data.password).then((res:any) => {
      let uid = res.user.uid
      delete data.password
      this.setUser(data, uid).then(res => {
        this.afauth.signOut()
        this.common.showToast("success", "", "User created Successful!")
        // this.resetPassword(data.email)
      })
    }).catch(err => {
      console.log(err)
      this.common.showToast("error", "", err)
    }).finally(() => {
      this.common.stopLoader()
    })
  }

  resetPassword(email:string) {
    this.common.showLoader()
    this.email = email
    this.afauth.sendPasswordResetEmail(email).then(res => {
      // this.common.showToast("success", "", "Reset Password Link sent successful on email!")
      this.router.navigateByUrl("/auth/success")
      localStorage.removeItem("uid")
      localStorage.removeItem("subAdminData")
      this.afauth.signOut()  
      this.common.stopLoader()
    }).catch(err => {
      console.log(err)
      this.common.showToast("error", "", err)
      this.common.stopLoader()
    }).finally(()=>{
      this.common.stopLoader()
    })
  }

  setUser(data:any, uid:string) {
    return this.db.collection(this.collection).doc(uid).set(data)
  }

  getAll() {
    return this.db.collection(this.collection).get().pipe(
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

  updateUser(id:string, data:any) {
    this.common.showLoader()
    return this.db.collection(this.collection).doc(id).update(data).then(res=>{
      this.common.showToast("success","Sub Admin Updated successful!","")
    }).catch(err=>{
      this.common.showToast("error","",err)
    }).finally(()=>{
      this.common.stopLoader()
    })
  }

  delete(id:string) {
    this.common.showLoader()
    return this.db.collection(this.collection).doc(id).delete().then(res => {
      this.common.stopLoader()
    }).catch(err => {
      console.log(err)
      this.common.showToast("error", "", err)
    }).finally(() => {
      this.common.showToast("error", "", "Deleted!")
      this.common.stopLoader()
    })
  }

  blockSubAdmin(id:string,data:any) {
    this.common.showLoader()
    this.db.collection(this.collection).doc(id).update(data).then(res=>{
      if(data.isBlocked) {
        this.common.showToast("success","Sub admin is blocked!","")
      }
      else
      {
        this.common.showToast("success","Sub admin is Unblock!","")
      }
    }).catch(err=>{
      this.common.showToast("error","",err)
    }).finally(()=>{
      this.common.stopLoader()
    })
  }
}
