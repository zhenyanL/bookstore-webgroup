import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  errorFlag = false;
  errorMsg = 'Incomplete or invalid book information';

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
  }

}
