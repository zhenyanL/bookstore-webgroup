import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../../services/book.service.client';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service.client';
import {CartService} from '../../../services/cart.service.client';
import {CommentService} from '../../../services/comment.service.client';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  seller: any;
  book: any;
  userId: any;


  constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService, private userService: UserService
    , private bookService: BookService, private router: Router, private cartService: CartService) { }

  ngOnInit() {
    if (this.sharedService.user !== undefined) {
      this.userId = this.sharedService.user['_id'];
    }
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.bookService.findBookById(params['bid'])
            .subscribe((book: any) => {
              if (book) {
                this.book = book;
                this.sharedService.book = book;
                this.userService.findUserById(book._seller)
                  .subscribe(
                    (seller: any) => {
                      this.seller = seller;
                    });
              } else {
                this.router.navigate(['/']);
              }
            });
        }
      );
  }

  onCart() {
    this.cartService.addToCart(this.book);
  }
}
