import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-men-prod-list',
  templateUrl: './men-prod-list.component.html',
  styleUrls: ['./men-prod-list.component.css']
})
export class MenProdListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
