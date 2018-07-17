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
    productList: any = [];
  /* products: Product[] = [
    {
      product_id: 101001101,
      product_img: 'http://www.planetayurveda.com/media/catalog/product/i/m/image-not-available-store.png',
      product_name: 'UCB Mens Cotton T-Shirt',
      product_desc: 'Black Round Neck Full Sleeve T-Shirt',
      product_price: 1500,
      product_size: 'L'
    },
    {
      product_id: 2,
      product_img: 'http://www.planetayurveda.com/media/catalog/product/i/m/image-not-available-store.png',
      product_name: 'U.S. Polo Assn. Cotton Polo',
      product_desc: 'U.S. Polo Assn. Mens Solid Regular Fit Cotton Polo',
      product_price: 1345,
      product_size: 'XL'
    },
    {
      product_id: 3,
      product_img: 'http://www.planetayurveda.com/media/catalog/product/i/m/image-not-available-store.png',
      product_name: 'WROGN T-shirt',
      product_desc: 'WROGN Men Grey & Rust Brown Striped Polo Collar T-shirt',
      product_price: 3000,
      product_size: 'XL'
    },
    {
      product_id: 4,
      product_name: 'United Colors of Benetton Men',
      product_img: 'http://www.planetayurveda.com/media/catalog/product/i/m/image-not-available-store.png',
      product_desc: 'United Colors of Benetton Men Beige & Blue Striped Polo Collar T-shirt',
      product_price: 1745,
      product_size: 'M'
    },
    {
      product_id: 5,
      product_img: 'http://www.planetayurveda.com/media/catalog/product/i/m/image-not-available-store.png',
      product_name: 'Puma T-shirt',
      product_desc: 'Puma Mens Cotton Polo',
      product_price: 719,
      product_size: 'S'
    }, 
  ];*/

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
