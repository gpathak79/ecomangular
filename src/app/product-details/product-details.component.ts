import { Component, OnInit,Input, } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EcomserviceService } from '../ecomservice.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  data:any="";
  value:any=""
  param1:any=""
  constructor(private _service:EcomserviceService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    console.log('Called Constructor');
    this.route.queryParams.subscribe(params => {
        this.param1 = params['property'];
     console.log(this.param1)
    });

   
  }

}
