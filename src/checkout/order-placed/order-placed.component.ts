import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../app/products.service';
import { Product } from '../../app/product';
import { OrderLineItem } from '../../app/orderlineitem';
import { Order } from '../../app/order';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css']
})

export class OrderPlacedComponent implements OnInit {
  sub: any;
  proddetail: any = [];
  productList: any = [];
  showproddetail = 'blah';
  order:Order;
  totalValue = 0;
  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
  ) { }

  ngOnInit() {
   this.getLocalProducts();
  }
  
  getLocalProducts(): void {
  alert("orders");
  	this.postYourOrder(this.order);
    this.productService.getProducts().subscribe(
      (products) => {
	    this.productList = this.getCartProducts();
	    this.totalValue = this.getCartProductsValue();
	    this.getCartProductsCount(); 
	    this.order['orderId'] = '1234567890';
        this.order.totalAmount=this.totalValue;
	    this.order.orderLineItems = this.productList.items.map((product)=> {
          return {
            productId:product.productId,
            quantity:1,
            size: product.size };
       });
       this.postYourOrder(this.order);
      });
  }
  
  postYourOrder(order:Order){
  	return this.productService.postOrders(order);
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
