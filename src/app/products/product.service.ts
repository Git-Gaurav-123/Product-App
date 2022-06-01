import { Injectable } from '@angular/core';
import { Iproduct } from './product';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, Observable, tap, throwError,map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
//  productUrl:string='assets/api/products/product.json'
productUrl:string='http://localhost:5064/api/Products'  
products:Iproduct[]=[] 
  
 

  
  constructor(private _httpClient:HttpClient) {}
 
  
    getProducts():Observable<Iproduct[]>
    {
      return this._httpClient.get<Iproduct[]>(this.productUrl)
     .pipe(
      tap((data)=>console.log(`All Products : ${JSON.stringify(data)})`)),
      catchError(this.handleError) 
     )
    }
    getProduct(id:number):Observable<Iproduct>{
      return this.getProducts().pipe(
        map((products:Iproduct[])=>products.find(p=>p.productId===id)),
      catchError(this.handleError)
        )
    }

    private handleError(err:HttpErrorResponse)
    {
return throwError(err)
    }
  
}
