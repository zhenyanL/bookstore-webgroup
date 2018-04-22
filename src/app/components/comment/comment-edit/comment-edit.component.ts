import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../services/shared.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentService} from '../../../services/comment.service.client';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css']
})
export class CommentEditComponent implements OnInit {
  userId: string;
  comment: any;
  bookId: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute
              , private sharedService: SharedService, private commentService: CommentService) { }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.commentService.findCommentById(params['cid'])
            .subscribe((comment: any) => {
              if (comment) {
                if (comment._author !== this.userId) {
                  this.router.navigate(['/']);
                }
                this.comment = comment;
                this.bookId = this.comment._book;
              } else {
                this.router.navigate(['/']);
              }
            });

        }
      );
  }

  update() {
    this.commentService.updateComment(this.comment).subscribe();
    alert('Changed comment is saved');
    this.router.navigate(['/book', this.bookId]);
  }

  delete() {
    this.commentService.deleteComment(this.comment._id).subscribe();
    alert('Comment is deleted');
    this.router.navigate(['/book', this.bookId]);
  }

}
