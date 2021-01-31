import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'login', component:LoginComponent},
  { path:'signup', component:SignupComponent},
  { path:'forgot-pwd', component:ForgotpasswordComponent},
  {path:'dashboard', component:DashboardComponent},
  { path: 'product-details', component:ProductDetailsComponent},
  {path:'recover-password',component:RecoverPasswordComponent},
  {path:'userprofile',component:UserprofileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
