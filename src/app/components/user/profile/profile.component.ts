import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: string;
  user: User;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private route: Router) {
    this.user = new User('', '', '', '', '');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      return this.userService.findUserById(this.userId).subscribe(
        (user: User) => {
          this.user = user;
        }
      );
    });
  }

  updateUser() {
    this.activatedRoute.params.subscribe(params => {
      return this.userService.updateUser(this.user).subscribe();
    });
    alert( this.user.username + ' save successfully' );
  }

  deleteUser() {
    this.activatedRoute.params.subscribe(params => {
      return this.userService.deleteUser(this.userId).subscribe(
        (data: any) => {
          this.route.navigate(['/login']);
        }
      );
    });
  }

}
