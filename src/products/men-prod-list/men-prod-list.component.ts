import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../app/product';
import { ProductService } from '../../app/products.service';


@Component({
  selector: 'app-men-prod-list',
  templateUrl: './men-prod-list.component.html',
  styleUrls: ['./men-prod-list.component.css']
})
export class MenProdListComponent implements OnInit {

  products: Product[] = [
    {
      product_id: 1,
      product_name: 'UCB Mens Cotton T-Shirt',
      prod_desc: 'Black Round Neck Full Sleeve T-Shirt',
      prod_price: 1500,
      prod_size: 'L'
    },
    {
      product_id: 2,
      product_name: 'U.S. Polo Assn. Cotton Polo',
      prod_desc: 'U.S. Polo Assn. Mens Solid Regular Fit Cotton Polo',
      prod_price: 1345,
      prod_size: 'XL'
    },
    {
      product_id: 3,
      product_name: 'WROGN T-shirt',
      prod_desc: 'WROGN Men Grey & Rust Brown Striped Polo Collar T-shirt',
      prod_price: 3000,
      prod_size: 'XL'
    },
    {
      product_id: 4,
      product_name: 'United Colors of Benetton Men',
      prod_desc: 'United Colors of Benetton Men Beige & Blue Striped Polo Collar T-shirt',
      prod_price: 1745,
      prod_size: 'M'
    },
    {
      product_id: 5,
      product_name: 'Puma T-shirt',
      prod_desc: 'Puma Mens Cotton Polo',
      prod_price: 719,
      prod_size: 'S'
    },
  ];

  constructor(
    private route: ActivatedRoute, private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(function(products){
      // console.log(products);
      this.products = products;
      // console.log(this.products);
    });
  }

}
