import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [
    LoginComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    UserDetailsComponent
  ]
})
export class UserAuthModule { }
