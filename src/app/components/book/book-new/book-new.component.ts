import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../../services/book.service.client';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  bookUrl = '../../../../assets/imgs/bookExample.png';
  // this is backup before merge
  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  onSubmit() {
  }

}
