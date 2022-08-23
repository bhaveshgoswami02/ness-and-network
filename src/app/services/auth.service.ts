import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CommonService } from './common.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  collection = "sub-admin"

  constructor(public afAuth: AngularFireAuth, public db: AngularFirestore, public router: Router, public common: CommonService) {
    // this.afAuth.authState.subscribe(res=>{
    //   if(res) {
    //     if(res.uid == "YYycwGFeNXgrHx3mIqleClkVbpJ3"){
    //       localStorage.setItem("uid",res.uid)
    //       localStorage.setItem("email",res.email)
    //       // this.router.navigateByUrl("/dashboard")
    //     }
    //     else{
    //       localStorage.removeItem("uid")
    //       localStorage.removeItem("email")
    //       this.router.navigateByUrl("/auth")
    //     }
    //   }
    //   else
    //   {
    //     this.router.navigateByUrl("/auth")
    //   }
    // })
  }

  signIn(email: any, password: any) {
    this.common.showLoader()
    console.log(email, password)
    if (email == environment.email && password == environment.password) {
      localStorage.setItem("uid", environment.uid)
      this.router.navigateByUrl("/dashboard")
      this.common.stopLoader()
    }
    else {
      this.afAuth.signInWithEmailAndPassword(email, password).then((signinRes: any) => {
        this.getSubAdminFromDb(signinRes.user.uid).subscribe((res:any) => {
          if (res.isBlocked) {
            this.common.showToast("error","","Your account is block!")
            this.logOut()
          }
          else {
            console.log(res)
            localStorage.setItem("uid", signinRes.user.uid)
            localStorage.setItem("subAdminData", JSON.stringify(res))
            this.router.navigateByUrl("/dashboard")
          }
        })
      }).catch(err => {
        this.common.showToast("error", "", err)
      }).finally(() => {
        this.common.stopLoader()
      })
    }
  }

  //  isAuthenticated(){
  //   if(localStorage.getItem("uid")){
  //     if(this.getUid() == "YYycwGFeNXgrHx3mIqleClkVbpJ3"){
  //       return true
  //     }
  //   }
  //   else{
  //     return false
  //   }
  //  }

  logOut() {
    localStorage.removeItem("uid")
    localStorage.removeItem("subAdminData")
    this.router.navigateByUrl("/auth")
    this.afAuth.signOut()
  }

  getUid() {
    return localStorage.getItem("uid")
  }

  isSuperAdmin() {
    if (localStorage.getItem("uid") == environment.uid) {
      return true
    }
    else {
      return false
    }
  }

  getSubAdminData() {
    return JSON.parse(localStorage.getItem('subAdminData') || '{}')
  }

  getSubAdminFromDb(uid: string) {
    return this.db.collection(this.collection).doc(uid).get().pipe(
      map(a => {
        const data = a.data() as any;
        const id = a.id;
        return { id, ...data };
      })
    )
  }

}
