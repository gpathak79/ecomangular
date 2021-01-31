import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EcomserviceService } from '../ecomservice.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

 
  myreactiveForm:any;
  tokendata:string=''
  constructor(private fb: FormBuilder,private _service:EcomserviceService,private activatedRoute: ActivatedRoute) { 
    this.myreactiveForm = this.fb.group({
   
      password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@#$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]], 
      confirmPass: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@#$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    });
  }  
  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.myreactiveForm.value)
    this.activatedRoute.queryParams.subscribe(params => {
      let tokendata = params['id'];
 console.log("tokendata",tokendata)
    this._service.RECOVERPASSWORD(this.myreactiveForm.value,tokendata).subscribe(res=>{
      console.log("query",)
          console.log("signup",res)
          if(res.code==210)
          {

            alert(res.message)
          }
          else{

            alert("Password Change  Succesfully")
        
          }
        })
        console.log('data',tokendata); // Print the parameter to the console. 
      });
  }
}

