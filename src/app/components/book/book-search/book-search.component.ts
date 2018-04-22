import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../services/book.service.client';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  imageUrl = '../../../../assets/imgs/bookExample.png';
  searchText: string;
  errorFlag: boolean;
  books: [any];

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  searchBook() {
    this.bookService.findBookByName(this.searchText).subscribe(
      (data: any) => {
        this.books = data;
      },
    (error: any) => {
      console.log(error);
      this.errorFlag = true;
    });
  }

}
