import { User } from '../models/user.model.client';
import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import {environment} from '../../environments/environment';

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  baseUrl = environment.baseUrl;

  createUser(user: User) {
    const url = this.baseUrl + '/api/user/';
    return this.http.post(url, user).map((response: Response) => {
        return response.json();
      });
  }

  findUserByUsername(username: string) {
    const url = this.baseUrl + '/api/user?username=' + username;
    return this.http.get(url).map((response: Response) => {
        return response.json();
    });
  }

  findUserByCredentials(username: string, password: string) {
    const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
    return this.http.get(url).map((response: Response) => {
        return response.json();
    });
  }

  findUserById(userId: string) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateUser(user) {
    const url =  this.baseUrl + '/api/user/' + user._id;
    return this.http.put(url, user).map((response: Response) => {
      return response.json();
    });
  }

  deleteUser(userId: string) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url);
  }
}
