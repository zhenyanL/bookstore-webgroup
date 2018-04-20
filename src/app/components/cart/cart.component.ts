import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service.client';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.currentCart.subscribe(cart => this.cart = cart);
  }

}
