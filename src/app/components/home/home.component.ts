import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../services/shared.service.client';
import {BookService} from '../../services/book.service.client';
import {UserService} from '../../services/user.service.client';
import {SharedBookService} from '../../services/shared-book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: any[];

  constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService, private userService: UserService
    , private bookService: BookService, private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.bookService.findAllBooks().subscribe(
      (books) => {
        this.books = books;
        console.log(this.books);
      }
    );

  }

  addToCart(book) {
    this.cartService.addToCart(book);
  }


}
