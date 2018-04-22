import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service.client';
import {BookService} from '../../services/book.service.client';
import {SharedService} from '../../services/shared.service.client';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service.client';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css']
})
export class CartContentComponent implements OnInit {
  userId: string;
  total: number;
  books: any[];
  user: any;

  constructor(private sharedService: SharedService, private cartService: CartService, private bookService: BookService, private router: Router, private userServie: UserService) { }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.userServie.findUserById(this.userId)
      .subscribe(
        (user) => this.user = user
      );
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
      this.userServie.buyOneBook(this.userId, book)
        .subscribe(
          () => this.cartService.clearCart()
        );
    }
    alert('Thanks for your order');
  }
}
