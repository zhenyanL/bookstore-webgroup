import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class CommentService {
  constructor(private http: Http) {}

  baseUrl = environment.baseUrl;

  createComment(bookId, userId, comment) {
    const url = this.baseUrl + '/api/user/' + userId + '/book/' + bookId + '/comment';
    return this.http.post(url, comment).map((response: Response) => {
      return response.json();
    });
  }

  findAllCommentsForBook(bookId) {
    const url = this.baseUrl + '/api/book/' + bookId + '/comment';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findCommentById(commentId) {
    const url = this.baseUrl + '/api/comment/' + commentId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateComment(newComment) {
    const url = this.baseUrl + '/api/comment/' + newComment._id;
    return this.http.put(url, newComment).map((response: Response) => {
      return response.json();
    });
  }

  deleteComment(commentId) {
    const url = this.baseUrl + '/api/comment/' + commentId;
    return this.http.delete(url).map((response: Response) => {
      return response.json();
    });
  }
}
