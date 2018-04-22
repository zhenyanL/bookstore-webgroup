import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {BookService} from '../../../services/book.service.client';

@Component({
  selector: 'app-buyer-list',
  templateUrl: './buyer-list.component.html',
  styleUrls: ['./buyer-list.component.css']
})
export class BuyerListComponent implements OnInit {
  book: any;
  bookId: string;
  userIds: any[];
  users: any[];

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private bookService: BookService) { }

  ngOnInit() {
    this.users = [];
    this.activatedRoute.params.subscribe(params => {
      this.bookId = params['bid'];
      this.bookService.findBookById(this.bookId)
        .subscribe(
          (book) => {
            this.book = book;
            this.userIds = book._buyer;
            for (const userId of this.userIds) {
              this.userService.findUserById(userId)
                .subscribe(
                  (user) => this.users.push(user)
                );
            }
          }
        );
    });
  }

}
