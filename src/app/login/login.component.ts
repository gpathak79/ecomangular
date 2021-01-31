import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EcomserviceService } from '../ecomservice.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myreactiveForm:any;
  constructor(private fb: FormBuilder,private _service:EcomserviceService) { 
    this.myreactiveForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@#$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]], 
    });
  }  
  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.myreactiveForm.value)
    this._service.LOGINUSER(this.myreactiveForm.value).subscribe(res=>{
          console.log("login",res)
          if(res.code==210)
          {
            alert(res.message)
          }
          else{
           
            localStorage.setItem('token',res.token)
          }
          
        })
  }
}
