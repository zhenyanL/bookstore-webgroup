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
  book: any;
  bookId: string;


  constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService, private userService: UserService
    , private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.currentSellerId = this.sharedService.user['_id'];
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.bookId = params['bid'];
          if (this.sharedService.book !== undefined && this.sharedService.book['_id'] === this.bookId) {
            this.book = this.sharedService.book;
          } else {
            this.bookService.findBookById(this.bookId)
              .subscribe((book: any) => {
                if (book) {
                  if (book._seller !== this.currentSellerId) {
                    this.router.navigate(['/']);
                  }
                  this.book = book;
                } else {
                  this.router.navigate(['/']);
                }
              });
          }

        }
      );
  }

  onUpdate() {
    this.bookService.updateBook(this.book)
      .subscribe(
        (book: any) => {
          alert( this.book.name + ' saved successfully' );
          this.router.navigate(['/book', this.bookId]);
        }
      );
  }

  onDelete() {
    this.bookService.deleteBook(this.book._id)
      .subscribe(
        () => {
        }
      );
    alert( 'The book is deleted successfully' );
    this.router.navigate(['/']);
  }

}
