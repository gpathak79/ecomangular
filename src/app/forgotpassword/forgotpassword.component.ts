import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EcomserviceService } from '../ecomservice.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotkey=0;
  myreactiveForm:any;
  constructor(private fb: FormBuilder,private _service:EcomserviceService,private activatedRoute: ActivatedRoute) { 
    this.myreactiveForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]]
    });

 
      this.activatedRoute.queryParams.subscribe(params => {
            let date = params['id'];
            console.log('data',date); // Print the parameter to the console. 
        });
    

  }  
  ngOnInit(): void {
  }
  onSubmit()
  {
    this.forgotkey=1
    console.log(this.myreactiveForm.value)
    
      console.log(this.myreactiveForm.value)
      this._service.FORGOTUSER(this.myreactiveForm.value).subscribe(res=>{
        console.log("login",res)
        if(res.code==210)
        {
          alert(res.message)
        }
        else{
          alert("Email Send  Succesfully")
        }
        
      })
  }
}

