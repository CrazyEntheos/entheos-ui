import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../app/product';
import { ProductService } from '../../app/products.service';


@Component({
  selector: 'app-all-prod-list',
  templateUrl: './all-prod-list.component.html',
  styleUrls: ['./all-prod-list.component.css']
})
export class AllProdListComponent implements OnInit {
  productList: any = [];
  constructor(
    private route: ActivatedRoute, private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(
      (products) => {
        this.productList = products.json();
        //this.showproddetail= 'true';      
      });
  }
}
