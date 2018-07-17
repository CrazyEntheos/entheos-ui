import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../app/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  sub: any;
  proddetail: any = [];
  showproddetail = 'blah';
  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
  ) { }

  ngOnInit() {
    
    this.sub = this.route.params.subscribe(
      (params)=> {
        console.log(params['product_id']);        
        this.getProducts(params['product_id']);
      }
    )
  }

  getProducts(prodid): void {
    this.productService.getProduct(prodid)
    .subscribe(
      (products) => {
        this.proddetail = products.json();
        this.showproddetail= 'true';      
        console.log(this.proddetail.productName);
      });
  }

}
