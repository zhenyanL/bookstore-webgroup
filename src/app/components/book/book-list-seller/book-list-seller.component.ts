import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../services/shared.service.client';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../../services/book.service.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list-seller.component.html',
  styleUrls: ['./book-list-seller.component.css']
})
export class BookListSellerComponent implements OnInit {
  books: any[];

  constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService, private bookService: BookService, private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.bookService.findAllBooksForSeller(params['uid'])
            .subscribe(
              (books) => this.books = books
            );
        });
  }
}
