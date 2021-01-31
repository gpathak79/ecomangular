import { Component, OnInit } from '@angular/core';
import { EcomserviceService } from '../ecomservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ProductData:any=Array;

  
  message:any;
  a=false
  constructor(private _service:EcomserviceService) { }

  ngOnInit(): void {

    this.ProductData=[{
      "item_name":"Hello",
      "sku":"1122"
    }]

    this._service.PRODUCTDATA().subscribe(res=>{

      this.ProductData=res.data;
      console.log(res.data)
    })
  
  }

 
 

}
