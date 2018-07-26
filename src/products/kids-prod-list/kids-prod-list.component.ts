import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../app/product';
import { ProductService } from '../../app/products.service';

@Component({
  selector: 'app-kids-prod-list',
  templateUrl: './kids-prod-list.component.html',
  styleUrls: ['./kids-prod-list.component.css']
})
export class KidsProdListComponent implements OnInit {
  sub: any;
  productList: any = [];
  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      (params)=> {
        console.log(params['category_id']);        
        this.getProductsByCategory(params['category_id']);
      }
    )
  }
  getProductsByCategory(categeoryId): void {
    this.productService.getProductsByCategory(categeoryId)
    .subscribe(
      (products) => {
        this.productList = products.json();
      });
  }
}

