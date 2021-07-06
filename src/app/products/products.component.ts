import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  filteredString:string='';
  sortby:any='1';
  products:any=[];
  //   constructor(private productServices:ProductsService)
  //   {
  //     this.products=productServices.getallproducts();
  //   }
  errMsg:any;
  constructor(proService:ProductsService){
    proService.getallproducts().subscribe(
      result => this.products = result,
      error => this.errMsg = error
    )
  }
}
