import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Product } from './product';
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

  constructor(
    private http: Http,
    private messageService: MessageService) { }

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
  
}