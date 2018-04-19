import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BookService} from '../../../services/book.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  currentSellerId: string;
  book = {
    _id: '',
    _seller: '',
    name: '',
    author: '',
    publisher: '',
    year: '',
    description: '',
    imageUrl: '',
    number: '',
    price: '',
  };


  constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService, private userService: UserService
    , private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.currentSellerId = this.sharedService.user['_id'];
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.book._id = params['bid'];
          this.bookService.findBookById(this.book._id)
            .subscribe((book: any) => {
            if (book) {
              this.book = book;
              if (book._seller !== this.currentSellerId) {
                this.router.navigate(['/']);
              }
            }
          });
        }
      );
  }

  onSubmit() {
    this.bookService.updateBook(this.book)
      .subscribe(
        (book: any) => {
          alert( this.book.name + ' saved successfully' );
        }
      );
  }

}
