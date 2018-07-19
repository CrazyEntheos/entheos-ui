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
  order: Order;
  orderlineitems: OrderLineItem[]= [];
  orderlineitem: OrderLineItem;
  orderId: string;
  totalValue = 0;
  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
  ) {}

  ngOnInit() {
   this.getLocalProducts();
   this.productList = this.getCartProducts();
  }
  
  getLocalProducts(): void {
    this.productService.getProducts().subscribe(
      (products) => {
		this.productList = this.getCartProducts();
		this.totalValue = this.getCartProductsValue();
	    for (let i = 0; i < this.productList.length; i++) {
	   		this.orderlineitem = 
	       	{
	            productId:this.productList[i].productId,
	            quantity:1,
	            size: this.productList[i].size[0]
	         }
	   		this.orderlineitems.push(this.orderlineitem);
	    }
       this.order = {
       	orderId: Math.floor(100000000 + Math.random() * 900000000).toString(),
       	totalAmount: this.totalValue,
       	orderLineItems: this.orderlineitems
       }
       this.postYourOrder(this.order);
      });
  }
  
  postYourOrder(order:Order){
  	 this.productService.postOrders(order).subscribe(
  		(order) => {
  			localStorage.clear();
  			this.orderId = this.order.orderId;
  			//alert(this.orderId);
  			//alert(this.order);
  			//this.productService.navbarCartCount = 0;
  			this.productService.calculateLocalCartProdCounts();
  			alert(order);
  		}
  	);
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
