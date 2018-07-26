import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../app/products.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(
    public productService: ProductService
  ) {}

  ngOnInit() {
  }

}
