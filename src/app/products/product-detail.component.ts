import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';


import { Iproduct } from './product';
import { ProductService } from './product.service';



@Component({

  selector: 'app-product-detail',

  templateUrl: './product-detail.component.html',

  styleUrls: ['./product-detail.component.css']

})

export class ProductDetailComponent implements OnInit {

title:string='Product-Detail'

product:Iproduct
errorMessage:string

  constructor(private _activedRoute:ActivatedRoute,private _router:Router,private _productService:ProductService) { }



  ngOnInit(): void {

    const id=Number(this._activedRoute.snapshot.paramMap.get('id'))//id in the get method should match

    this.title +=` : ${id}`
    this.getProduct(id)
   
  }

  getProduct(id:number){

    this._productService.getProduct(id).subscribe({
      next:(product)=>this.product=product,
      error:(err)=>this.errorMessage=err,
      complete:()=>console.log('Reading single product completed')

    })

  }
  onBack():void{

    this._router.navigate(['/products'])

  }



}