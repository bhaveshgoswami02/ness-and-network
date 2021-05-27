import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  {path:'',component:ComponentsComponent,children:[

  ]},
  {path:'auth',component:AuthComponent,children:[
    {path:'',component:LoginComponent},
    {path:'forgot-password',component:ForgotPasswordComponent},
    {path:'reset-password',component:ResetPasswordComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
