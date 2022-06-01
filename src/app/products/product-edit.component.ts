import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NumberValidators } from '../shared/number.validator';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  title:string='Edit-Product'
  productForm:FormGroup
  errorMessage:string
  displayMessage:{[key:string]:string}
 private validationMessages:{[key:string]:{[key:string]:string}}
  
 
 
 constructor(private fb:FormBuilder) { 
   this.validationMessages={
   productName:{
     required:'Product Name is required',
     minlength:'Product Name should be of at least 3 characters',
     maxlength:'Product Name cannot exceeds 30 characters'
   },
   productCode:{
     required:'Product code is mandatory'
   },
   releaseDate:{
     required:'Release Date is mandatory',
     pattern:'Incorrect date pattern '
    
   },
   price:{
     required:'Price of product is mandatory'
   },
   starRating:{
     range:'Product rating lies between 1(lowest) and 5(highest)'
   }

   }
 }

 

  ngOnInit(): void {

    this.productForm=this.fb.group({
    productName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
   productCode:['',Validators.required],
   releaseDate:['',[Validators.required,Validators.pattern('')]],
   price:['',Validators.required],
   starRating:['',NumberValidators.range(1,5)],
   description:''

  })
 

  }
  saveProduct()
  {

  }
  deleteProduct(){}

}
