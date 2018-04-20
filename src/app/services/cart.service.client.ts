import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CartService {
  private books: string[] = [];

  private cart = new BehaviorSubject<string[]>(this.books);
  currentCart = this.cart.asObservable();

  constructor() { }

  addToCart(bookId: string) {
    this.books.push(bookId);
    this.cart.next(this.books);
  }

}
