import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-following-list',
  templateUrl: './following-list.component.html',
  styleUrls: ['./following-list.component.css']
})
export class FollowingListComponent implements OnInit {
  userId: string;
  follow = [];

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      if (this.userId === undefined) {
        this.userId = this.sharedService.user['_id'];
      }
      this.userService.findUserById(this.userId).subscribe(
        (user) => {
          for (const userId of user.follow) {
            const u = this.userService.findUserById(userId);
            this.follow.push(u);
          }
        });
    });
  }

}
