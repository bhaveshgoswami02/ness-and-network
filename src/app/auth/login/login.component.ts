import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: FormGroup;
  isCapchaVerify: boolean = false
  sitekey:any = environment.sitekey 
  constructor(private fb: FormBuilder, public router: Router, public auth: AuthService, private messageService: MessageService) {
    this.data = this.fb.group({
      'email': ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      'password': ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  get validation() { return this.data?.controls; }

  onSubmit() {
    this.auth.signIn(this.data.value.email, this.data.value.password)
  }

  showResponse(event:any) {
    console.log(event.response)
    if(event.response) {
     this.isCapchaVerify = true
    }
    else
    {
      this.isCapchaVerify = false
    }
    // this.messageService.add({ severity: 'info', summary: 'Succees', detail: 'User Responded', sticky: true });
  }

}
