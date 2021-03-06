import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubAdminService } from 'src/app/services/sub-admin.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  data: FormGroup;

  constructor(private fb: FormBuilder,public subAdminService:SubAdminService) {
    this.data = this.fb.group({
      'email': ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    })
  }

  ngOnInit(): void {
  }

  get validation() { return this.data?.controls; }

  onSubmit() {
    // console.log("form",this.f)
    // console.log("form data",this.data)
    this.subAdminService.resetPassword(this.data.value.email)
  }

}
