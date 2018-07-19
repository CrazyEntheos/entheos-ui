import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../app/products.service';
import { Product } from '../../app/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  sub: any;
  proddetail: any = [];
  productList: any = [];
  showproddetail = 'blah';
  totalValue = 0;
  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.getLocalProducts();
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
        this.addToCart(this.proddetail);
        this.productList = this.getCartProducts();
        this.totalValue = this.getCartProductsValue();
        this.getCartProductsCount();
        //alert(this.totalValue);
        console.log(this.proddetail.productName);
      });
      
  }
  
  getLocalProducts(): void {
    this.productService.getProducts()
    .subscribe(
      (products) => {
        this.showproddetail= 'true'; 
	    this.productList = this.getCartProducts();
	    this.totalValue = this.getCartProductsValue();
	    this.getCartProductsCount();     
      });
  }
  
  addToCart(product: Product) {
    this.productService.addToCart(product);
  }
  removeProduct(product: Product) {
    this.productService.deleteProduct(product);
  }
  getCartProductsValue(){
  	return this.productService.calculateCartValue();
  }
  getCartProducts(){
  	return this.productService.getLocalCartProducts();
  }
  
  getCartProductsCount(){
  	return this.productService.calculateLocalCartProdCounts();
  }
}
