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
      product_img: 'http://www.planetayurveda.com/media/catalog/product/i/m/image-not-available-store.png',
      product_name: 'W Ethnics',
      product_desc: 'W Women Orange & Beige Printed Straight Kurta',
      product_price: 1250,
      product_size: 'M'
    },
    {
      product_id: 2,
      product_img: 'http://www.planetayurveda.com/media/catalog/product/i/m/image-not-available-store.png',
      product_name: 'BIBA Women’s Ethnic Wear',
      product_desc: 'Biba Women Green Solid Kurta with Churidar & Dupatta',
      product_price: 2400,
      product_size: 'L'
    },
    {
      product_id: 3,
      product_img: 'http://www.planetayurveda.com/media/catalog/product/i/m/image-not-available-store.png',
      product_name: 'AKS Dress',
      product_desc: 'AKS Women Green & White Printed Maxi Dress',
      product_price: 1125,
      product_size: 'XS'
    },
    {
      product_id: 4,
      product_img: 'http://www.planetayurveda.com/media/catalog/product/i/m/image-not-available-store.png',
      product_name: 'HERE&NOW Top',
      product_desc: 'HERE&NOW Women Black Lightweight Floral Print Cold Shoulder Top',
      product_price: 3056,
      product_size: 'M'
    },
    {
      product_id: 5,
      product_img: 'http://www.planetayurveda.com/media/catalog/product/i/m/image-not-available-store.png',
      product_name: 'W For Women',
      product_desc: 'W Women Turquoise Blue & Coral Orange Printed Straight Kurta',
      product_price: 1455,
      product_size: 'XL'
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
