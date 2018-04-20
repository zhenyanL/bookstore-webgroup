import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class BookService {
  constructor(private http: Http) {}

  baseUrl = environment.baseUrl;

  createBook(userId, book) {
    const url = this.baseUrl + '/api/user/' + userId + '/book/';
    return this.http.post(url, book).map((response: Response) => {
      return response.json();
    });
  }

  findAllBooksForUser(userId) {
    const url = this.baseUrl + '/api/user/' + userId + '/book';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findAllBooks() {
    const url = this.baseUrl + '/api/books';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findBookById(bookId) {
    const url = this.baseUrl + '/api/book/' + bookId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateBook(newBook) {
    const url = this.baseUrl + '/api/book/' + newBook._id;
    return this.http.put(url, newBook).map((response: Response) => {
      return response.json();
    });
  }

  deleteBook(bookId) {
    const url = this.baseUrl + '/api/book/' + bookId;
    return this.http.delete(url).map((response: Response) => {
      return response.json();
    });
  }

  buyOneBook(userId, bookId) {
    const url = this.baseUrl + '/api/user/' + userId + '/book1/' + bookId;
    return this.http.put(url, '').map((response: Response) => {
      return response.json();
    });
  }

  addBookToShoppingList(userId, bookId) {
    const url = this.baseUrl + '/api/user/' + userId + '/book/' + bookId;
    return this.http.put(url, '').map((response: Response) => {
      return response.json();
    });
  }

  buyBooksInShopplingList(userId) {
    const url = this.baseUrl + '/api/user/' + userId + '/book/';
    return this.http.put(url, '').map((response: Response) => {
      return response.json();
    });
  }
}
