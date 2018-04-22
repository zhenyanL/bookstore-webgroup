import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {
  user: any;
  book: {};
  followingList: any[];
  followedList: any[];

  private userSubject = new BehaviorSubject<any>(undefined);
  currentUser = this.userSubject.asObservable();

  constructor() {}

  updateUser(user) {
    this.user = user;
    this.userSubject.next(this.user);
  }

  clearUser() {
    this.user = undefined;
    this.userSubject.next(this.user);
  }
}
