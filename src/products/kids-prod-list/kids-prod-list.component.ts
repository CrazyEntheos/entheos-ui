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


  products: Product[] = [
    {
      product_id: 1,
      product_img: 'http://www.planetayurveda.com/media/catalog/product/i/m/image-not-available-store.png',
      product_name: 'W Ethnics',
      product_desc: 'CUTECUMBER Girls Pink Self Design Fit and Flare Dress',
      product_price: 1260,
      product_size: '6-9 M'
    },
    {
      product_id: 2,
      product_img: 'http://www.planetayurveda.com/media/catalog/product/i/m/image-not-available-store.png',
      product_name: 'BIBA Women’s Ethnic Wear',
      product_desc: 'StyleStone Girls Blue & Off-White Printed A-Line Dress',
      product_price: 5045,
      product_size: '5-8 Y'
    },
    {
      product_id: 3,
      product_img: 'http://www.planetayurveda.com/media/catalog/product/i/m/image-not-available-store.png',
      product_name: 'AKS Dress',
      product_desc: 'My Little Lambs Girls Beige Printed Empire Dress',
      product_price: 2600,
      product_size: '12-24 M'
    },
    {
      product_id: 4,
      product_img: 'http://www.planetayurveda.com/media/catalog/product/i/m/image-not-available-store.png',
      product_name: 'HERE&NOW Top',
      product_desc: 'LilPicks Boys Maroon & Navy Blue Solid T-shirt with Shorts',
      product_price: 1500,
      product_size: '9-12 M'
    },
    {
      product_id: 5,
      product_img: 'http://www.planetayurveda.com/media/catalog/product/i/m/image-not-available-store.png',
      product_name: 'W For Women',
      product_desc: 'Mothercare Girls Yellow Self-Striped Cardigan',
      product_price: 3015,
      product_size: '8-10 Y'
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

