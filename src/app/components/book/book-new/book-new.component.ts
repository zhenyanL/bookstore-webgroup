import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {BookService} from '../../../services/book.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  _seller: string;
  name: string;
  author: string;
  publisher: string;
  year: number;
  description: string;
  imageUrl = '../../../../assets/imgs/bookExample.png';
  number: number;
  price: number;

  constructor(private sharedService: SharedService, private userService: UserService
              , private bookService: BookService, private router: Router) {
  }

  ngOnInit() {
      this._seller = this.sharedService.user['_id'];
  }

  onSubmit() {
    this.name = this.registerForm.value.name;
    this.author = this.registerForm.value.author;
    this.publisher = this.registerForm.value.publisher;
    this.year = this.registerForm.value.year;
    this.description = this.registerForm.value.description;
    this.imageUrl = this.registerForm.value.url;
    this.number = this.registerForm.value.number;
    this.price = this.registerForm.value.price;
    const book = {
      _seller: this._seller,
      name: this.name,
      author: this.author,
      publisher: this.publisher,
      year: this.year,
      description: this.description,
      imageUrl : this.imageUrl,
      number: this.number,
      price: this.price
    };
    this.bookService.createBook(this._seller, book).subscribe(
      (createdBook) => {
        alert(createdBook.name + ' has been added!');
        this.router.navigate(['/']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
