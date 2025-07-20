import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  imports: [RouterLink],
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
