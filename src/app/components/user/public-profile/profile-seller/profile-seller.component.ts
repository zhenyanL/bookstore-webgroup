import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../services/user.service.client';
import {SharedService} from '../../../../services/shared.service.client';

@Component({
  selector: 'app-profile-seller',
  templateUrl: './profile-seller.component.html',
  styleUrls: ['./profile-seller.component.css']
})
export class ProfileSellerComponent implements OnInit {
  myId: string;
  userId: string;
  user: any;
  hasFollowed: boolean;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.myId = this.sharedService.user['_id'];
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      return this.userService.findUserById(this.userId).subscribe(
        (user) => {
          this.user = user;
          this.sharedService.followingList = [];
          this.sharedService.followedList = [];
          for (const followingUserId of user.follow) {
            this.userService.findUserById(followingUserId).subscribe(
              (followingUser) => this.sharedService.followingList.push(followingUser)
            );
          }
          for (const followedUserId of user.followedBy) {
            if (followedUserId === this.myId) {
              this.hasFollowed = true;
            }
            this.userService.findUserById(followedUserId).subscribe(
              (followedUser) => this.sharedService.followedList.push(followedUser)
            );
          }
        }
      );
    });
  }

  follow() {
    this.activatedRoute.params.subscribe(params => {
      return this.userService.follow(this.myId, this.userId).subscribe(
        (data: any) => {
          alert('follow ' + this.user.username + ' successfully');
        }
      );
    });
  }

}
