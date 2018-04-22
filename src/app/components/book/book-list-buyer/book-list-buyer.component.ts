import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../services/book.service.client';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-book-list-buyer',
  templateUrl: './book-list-buyer.component.html',
  styleUrls: ['./book-list-buyer.component.css']
})
export class BookListBuyerComponent implements OnInit {

  books: any[];

  constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService, private bookService: BookService, private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userService.findUserById(params['uid'])
            .subscribe(
              (user) => this.books = user.books
            );
        });
  }

}
