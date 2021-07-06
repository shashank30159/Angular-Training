import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// interface Product
// {
//   productId:number,
//   productName:String,
//   productPrice:number,
//   productDescrption:String,
//   productImg:String,
// }
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  
  // products:Product[]=[
  //   {productId:101, productName:'football',productPrice:5000,productDescrption:'the product is football ',productImg:'assets/images/foodball.jpg'},
  //   {productId:102, productName:'camara',productPrice:40000,productDescrption:'the product is canon camara ',productImg:'assets/images/Camara.jpg'},
  //   {productId:103, productName:'mobile',productPrice:60000,productDescrption:'the product is one plus mobile ',productImg:'assets/images/mobile.jpg'},
  //   {productId:104, productName:'television',productPrice:56000,productDescrption:'the product is television ',productImg:'assets/images/tv.png'}
    
  // ]
  // getallproducts():any{
  //   return this.products;
  // }

  url:string = 'assets/products.json'; //local
  //url:string = ''; //network RESTful
  constructor(private httpClient:HttpClient) { }
  getallproducts(){
     return this.httpClient.get(this.url)
}
}