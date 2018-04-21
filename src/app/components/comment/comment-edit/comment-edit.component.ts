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
              } else {
                this.router.navigate(['/']);
              }
            });

        }
      );
  }

  update() {
    this.commentService.updateComment(this.comment).subscribe();
  }

  delete() {
    this.commentService.deleteComment(this.comment._id);
    console.log('Delete button is pressed');
  }

}
