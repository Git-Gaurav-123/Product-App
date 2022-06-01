import { Component, OnChanges, OnInit ,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Iproduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy {

  imgHeight:number=50
  imgWidth:number=50
  title:string='Product List!!'
  showImage:boolean=false
  errorMessage:string
  sub:Subscription 

  
  private _listFilter:string=''

  get listFilter():string{
    return this._listFilter
  }
  set listFilter(value:string)
  {
    this._listFilter=value;
    console.log(`In the setter : ${value}`,
    this.filteredproducts=this.performFilter(value))
  }

filteredproducts:Iproduct[]=[]
products:Iproduct[]=[]
// private _productService

// constructor(productService:ProductService)
// {
//   this._productService=productService
// }
   

constructor(private _productService:ProductService) {
  
}
  ngOnDestroy(): void {
  this.sub?.unsubscribe();
  }
  
  ngOnInit(): void {
    this.sub=this._productService.getProducts().subscribe({next:(products)=>{
      this.products=products
    this.filteredproducts=this.products},
    error:err=>this.errorMessage=err})


  this.filteredproducts=this.products
  this.listFilter=''
    console.log(`The length of the products array is ${this.products.length}`)
  }
toggleImage():void{
this.showImage= !this.showImage
}
onRatingClickedParent(message:string):void{
  this.title='Product List!! '+ message;
}
performFilter(filterBy:string):Iproduct[]{
  filterBy=filterBy.toLocaleLowerCase()
  return this.products.filter((p:Iproduct)=>p.productName.toLocaleLowerCase().includes(filterBy))
}



}

