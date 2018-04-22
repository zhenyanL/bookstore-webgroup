import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-followedby-list',
  templateUrl: './followedby-list.component.html',
  styleUrls: ['./followedby-list.component.css']
})
export class FollowedbyListComponent implements OnInit {
  userId: string;
  followedBy: any[];
  user: any;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      if (this.userId === undefined) {
        this.userId = this.sharedService.user['_id'];
      }
      this.followedBy = this.sharedService.followedList;
      this.user = this.sharedService.user;
    });
  }

}
