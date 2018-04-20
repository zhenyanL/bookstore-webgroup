import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CartService {
  private books: any[] = [];

  private cart = new BehaviorSubject<any[]>(this.books);
  currentCart = this.cart.asObservable();

  constructor() { }

  addToCart(book) {
    this.books.push(book);
    this.cart.next(this.books);
  }

  removeFromCart(i: number) {
    this.books.splice(i, 1);
    this.cart.next(this.books);
  }

  clearCart() {
    this.books = [];
    this.cart.next(this.books);
  }
}
