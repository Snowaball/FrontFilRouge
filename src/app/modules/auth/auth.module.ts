import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SigninComponent } from './components/signin/signin.component';
import { AlertComponent } from 'src/app/shared/alert/alert.component';

const routes:Routes = [ 
  {path:"signin", component:SigninComponent}, 
  {path:"login", component:LoginComponent}, 
]

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    SigninComponent,
  ],
  imports: [
    CommonModule,   
    ReactiveFormsModule,
    RouterModule.forChild(routes), 
    AlertComponent
  ]
})
export class AuthModule { }
