import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service.client';
import {BookService} from '../../services/book.service.client';
import {SharedService} from '../../services/shared.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css']
})
export class CartContentComponent implements OnInit {
  userId: string;
  total: number;
  books: any[];

  constructor(private sharedService: SharedService, private cartService: CartService, private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.cartService.currentCart.subscribe(
      (books: any) => {
        this.total = 0;
        this.books = books;
        for (let book of this.books) {
          this.total += book.price;
        }
      }
    );
  }

  removeFromCart(i) {
    this.cartService.removeFromCart(i);
  }

  checkOut() {
    for (let book of this.books) {
      this.bookService.buyOneBook(this.userId, book._id)
        .subscribe();
    }
    this.cartService.clearCart();
    alert('Thanks for your order');
  }
}
