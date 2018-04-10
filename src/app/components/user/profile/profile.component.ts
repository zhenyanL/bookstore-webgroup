import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: string;
  user: any;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private route: Router,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
  }

  logout() {
    this.userService.logout().subscribe(
      (data: any) => this.route.navigate(['/login'])
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
