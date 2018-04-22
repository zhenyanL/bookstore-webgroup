import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Http, Response} from '@angular/http';

@Injectable()
export class SharedBookService {

  constructor(private http: Http) {}

  baseUrl = environment.baseUrl;

  createBook(book) {
    const url = this.baseUrl + '/api/sharedBook';
    return this.http.post(url, book).map((response: Response) => {
      return response.json();
    });
  }

  findAllSharedBook(){
    const url = this.baseUrl + '/api/sharedBook';
    return this.http.get(url).map(
      (response: Response) => {
        return response.json();
      }
    );
  }

  findOneSharedBook(id){
    const url = this.baseUrl + '/api/sharedBook/' + id;
    return this.http.get(url)
      .map((response) => {
        return response.json();
      });
  }

  updateSharedBook(id, sharedBook) {
    const url = this.baseUrl + '/api/sharedBook/' + id;
    console.log(sharedBook);
    console.log('~~~~~~~~');
    return this.http.put(url, sharedBook)
      .map((response: Response) => {
        console.log('back');
        return response.json();
      });
  }

  deleteSharedBook(id) {
    const url = this.baseUrl + '/api/sharedBook/' + id;
    return this.http.delete(url).map(
      (response: Response) => {
        return response.json();
      }
    );
  }

}
