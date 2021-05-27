import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  data: FormGroup;

  constructor(private fb: FormBuilder) {
    this.data = this.fb.group({
      'password': ['',[Validators.required,Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')]],
      'confirm_password': ['',[Validators.required,Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')]]
    })
  }

  ngOnInit(): void {
  }

  get validation() { return this.data?.controls; }

  comparePassword() {
    if(this.data.value.confirm_password == this.data.value.password) {
      return true
    }
    else
    {
      return false
    }
  }

  onSubmit() {
    console.log("form",this.validation)
    console.log("form data",this.data)
    // this.auth.signin(this.data.value)
  }

}
