import {Component, OnInit, ViewChild} from '@angular/core';
import {BookService} from '../../../services/book.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service.client';
import {NgForm} from '@angular/forms';
import {CommentService} from '../../../services/comment.service.client';

@Component({
  selector: 'app-comment-new',
  templateUrl: './comment-new.component.html',
  styleUrls: ['./comment-new.component.css']
})
export class CommentNewComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  comment = {
    _book: '',
    _author: '',
    username: '',
    title: '',
    rating: '',
    description: '',
    dateCreated: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService
              , private commentService: CommentService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.comment._author = this.sharedService.user['_id'];
    this.userService.findUserById(this.comment._author)
      .subscribe((user: any) => {
        if (user) {
          this.comment.username = user.username;
        }
      });
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.comment._book = params['bid'];
        }
      );
  }

  onSubmit() {
    this.comment.title = this.registerForm.value.title;
    this.comment.description = this.registerForm.value.description;
    this.comment.rating = this.registerForm.value.rating;
    this.commentService.createComment(this.comment._book, this.comment._author, this.comment)
      .subscribe(
        (comment: any) => {
          this.router.navigate(['..']);
        }
      );
  }

}
