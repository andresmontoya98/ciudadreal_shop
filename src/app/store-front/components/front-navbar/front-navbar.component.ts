import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'front-navbar',
  imports: [RouterLink, RouterLinkActive, ProductCardComponent],
  templateUrl: './front-navbar.component.html',
})
export class FrontNavbarComponent { }
