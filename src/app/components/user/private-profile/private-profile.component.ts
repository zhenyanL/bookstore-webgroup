import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-private-profile',
  templateUrl: './private-profile.component.html',
  styleUrls: ['./private-profile.component.css']
})
export class PrivateProfileComponent implements OnInit {
  userId: string;
  user: any;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private route: Router,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      if (this.userId === undefined) {
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
      } else {
        const myself = this.sharedService.user;
        if (myself['role'] === 'ADMIN') {
          this.userService.findUserById(this.userId).subscribe(
            (user) => {
              this.user = user;
            });
        } else {
          this.route.navigate(['/profile', this.userId]);
        }
      }
    });
  }

  logout() {
    this.sharedService.clearUser();
    this.userService.logout().subscribe(
      (data: any) => {
        this.sharedService.clearUser();
        this.route.navigate(['/login']);
      }
    );
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
