import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { SubAdminService } from 'src/app/services/sub-admin.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  data: FormGroup;

  constructor(private fb: FormBuilder, public subAdminService: SubAdminService, public common: CommonService) {
    this.data = this.fb.group({
      'email': ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    })
    // this.data = this.fb.group({
    //   'password': ['',[Validators.required,Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')]],
    //   'confirm_password': ['',[Validators.required,Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')]]
    // })
  }

  ngOnInit(): void {
  }

  get validation() { return this.data?.controls; }

  comparePassword() {
    if (this.data.value.confirm_password == this.data.value.password) {
      return true
    }
    else {
      return false
    }
  }

  onSubmit() {
    this.subAdminService.resetPassword(this.data.value.email)
  }

  back() {
    this.common.back()
  }

}
