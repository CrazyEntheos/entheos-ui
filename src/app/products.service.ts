import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Product } from './product';
import { OrderLineItem } from './orderlineitem';
import { Order } from './order';
import { MessageService } from './message.service';

/* const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; */

@Injectable({ providedIn: 'root' })
export class ProductService {

  private productsUrl = 'api/products';  // URL to web api
  url = 'http://localhost:9080/fashion/api';
  //http://localhost:9080/fashion/api/categories/5000001
  //http://localhost:9080/fashion/api/categories/5000001/products
  //http://localhost:9080/fashion/api/orders
  products: any = [];
  totalValue: number = 0;
  navbarCartCount = 0;
  
  constructor(
    private http: Http,
    private messageService: MessageService) { localStorage.clear();}

  /** GET ALL PRODUCTS  from the server */
  getProducts (): Observable<any> {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      return this.http.get(this.url+"/products", {headers: headers});
  }
  /** GET SINGLE PRODUCTS  from the server */
  getProduct (id): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this.url+"/products/"+ id, {headers: headers});
  }
  /** GET PRODUCTSBYCATEGORY  from the server */
  getProductsByCategory(categoryId): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this.url+"/categories/"+categoryId+"/products", {headers: headers});
  }
  
  /** SUBMIT ORDER */
  postOrders(order:Order): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.url+"/orders", order, {headers: headers});
  }
  
  // Adding new Product to cart localStorage
  addToCart(data: Product): void {
  	//localStorage.clear();
    let a: Product[];
    a = JSON.parse(localStorage.getItem("avct_item")) || [];
    a.push(data);
    localStorage.setItem("avct_item", JSON.stringify(a));
  }
  
  deleteProduct(product) {
  	const products: any[] = JSON.parse(localStorage.getItem("avct_item"));
    for (let i = 0; i < products.length; i++) {
      if (products[i].productId === product.productId) {
        products.splice(i, 1);
        break;
      }
    }
    // ReAdding the products after remove
	localStorage.setItem("avct_item", JSON.stringify(products));
  }
  
  calculateCartValue(){
  	this.totalValue = 0;
  	const products: any[] = JSON.parse(localStorage.getItem("avct_item"));
    products.forEach(product => {
      this.totalValue += product.price;
    });
    return this.totalValue;
  }
  
  getLocalCartProducts(): Product[] {
    const products: Product[] = JSON.parse(localStorage.getItem("avct_item")) || [];
    return products;
 }
  // returning LocalCarts Product Count
  calculateLocalCartProdCounts() {
    this.navbarCartCount = this.getLocalCartProducts().length;
  }
}