import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../app/product';
import { ProductService } from '../../app/products.service';

@Component({
  selector: 'app-women-prod-list',
  templateUrl: './women-prod-list.component.html',
  styleUrls: ['./women-prod-list.component.css']
})
export class WomenProdListComponent implements OnInit {

  products: Product[] = [
    {
      product_id: 1,
      product_name: 'W Ethnics',
      prod_desc: 'W Women Orange & Beige Printed Straight Kurta',
      prod_price: 1250,
      prod_size: 'M'
    },
    {
      product_id: 2,
      product_name: 'BIBA Women’s Ethnic Wear',
      prod_desc: 'Biba Women Green Solid Kurta with Churidar & Dupatta',
      prod_price: 2400,
      prod_size: 'L'
    },
    {
      product_id: 3,
      product_name: 'AKS Dress',
      prod_desc: 'AKS Women Green & White Printed Maxi Dress',
      prod_price: 1125,
      prod_size: 'XS'
    },
    {
      product_id: 4,
      product_name: 'HERE&NOW Top',
      prod_desc: 'HERE&NOW Women Black Lightweight Floral Print Cold Shoulder Top',
      prod_price: 3056,
      prod_size: 'M'
    },
    {
      product_id: 5,
      product_name: 'W For Women',
      prod_desc: 'W Women Turquoise Blue & Coral Orange Printed Straight Kurta',
      prod_price: 1455,
      prod_size: 'XL'
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
