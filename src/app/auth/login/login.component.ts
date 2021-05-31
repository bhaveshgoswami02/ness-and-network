import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: FormGroup;

  constructor(private fb: FormBuilder,public router:Router,public auth:AuthService) {
    this.data = this.fb.group({
      'email': ['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      'password': ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  get validation() { return this.data?.controls; }

  onSubmit() {
    this.auth.signIn(this.data.value.email,this.data.value.password)
  }

}
