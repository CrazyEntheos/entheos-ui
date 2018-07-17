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
  url = 'https://api-yaminikanthch.c9users.io/service/products/';

  constructor(
    private http: Http,
    private messageService: MessageService) { }

  /** GET ALL PRODUCTS  from the server */
  getProducts (): Observable<any> {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      return this.http.get(this.url, {headers: headers});
  }
  /** GET SINGLE PRODUCTS  from the server */
  getProduct (id): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this.url+ id, {headers: headers});
}
}