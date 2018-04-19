import { Injectable} from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';

import {environment} from '../../environments/environment';
import {SharedService} from './shared.service.client';
import {Router} from '@angular/router';

@Injectable()
export class UserService {
  baseUrl = environment.baseUrl;
  options = new RequestOptions();

  constructor(private http: Http, private router: Router, private sharedService: SharedService) {}

  register(username: string, password: string, role: string) {
    this.options.withCredentials = true;
    const credentials = {
      username : username,
      password : password,
      role: role
    };
    return this.http.post(this.baseUrl + '/api/register', credentials, this.options)
      .map((res: Response) => {
          console.log(res);
          return res.json();
        }
      );
  }

  login(username: string, password: string) {
    this.options.withCredentials = true;
    const credentials = {
      username : username,
      password : password
    };
    return this.http.post(this.baseUrl + '/api/login', credentials, this.options)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  logout() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/logout', '', this.options)
      .map((res: Response) => {
          const data = res;
        }
      );
  }

  loggedIn() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
      .map((res: Response) => {
        const user = res.json();
        if (user !== 0) {
          this.sharedService.user = user; // setting user so as to share with all components
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      });
  }

  findAllUsers() {
    const url = this.baseUrl + '/api/user/';
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

  follow(myId, userId) {
    const url =  this.baseUrl + '/api/' + myId + '/user/' + userId;
    return this.http.put(url, '').map((response: Response) => {
      return response.json();
    });
  }
}
