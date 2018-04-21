import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../services/shared.service.client';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../../services/book.service.client';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  userId: string;
  books: any[];

  constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService, private bookService: BookService,) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          console.log(params['uid']);
          this.bookService.findAllBooksForUser(params['uid'])
            .subscribe((books: any[]) => {
                if (books) {
                  this.books = books;
                  console.log(books);
                }
              }
            );
        });
  }
}
