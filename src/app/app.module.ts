import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { EcomserviceService } from './ecomservice.service';
import { ErrorhandleInterceptor } from './errorhandle.interceptor';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HeaderComponent } from './header/header.component';
import { FotterComponent } from './fotter/fotter.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ProductDetailsComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    RecoverPasswordComponent,
    UserprofileComponent,
    HeaderComponent,
    FotterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ EcomserviceService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorhandleInterceptor,
    multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
