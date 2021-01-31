import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { EcomserviceService } from '../ecomservice.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myreactiveForm:any;
  constructor(private fb: FormBuilder,private _service:EcomserviceService,private router:Router) { 
    this.myreactiveForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      mobileNo: [null,[Validators.required,Validators.minLength(10)]],
      password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@#$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]], 
      role: ['',Validators.required],
    });
  }  
  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.myreactiveForm.value)
    this._service.SIGNUPUSER(this.myreactiveForm.value).subscribe(res=>{
          console.log("signup",res)
          if(res.code==210)
          {
            alert(res.message)
          }
          else{
            this.router.navigate(['/login'])
          }
        })
  }
}


