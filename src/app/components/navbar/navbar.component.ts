import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../services/user.service.client';
import {SharedService} from '../../services/shared.service.client';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: '';
  password: '';
  loggedFlag: boolean;
  errorFlag: boolean;
  errorMessage = 'Username or password is incorrect!';

  constructor(private userService: UserService, private sharedService: SharedService, private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.sharedService.currentUser.subscribe(
      (user) => {
        if (user) {
          this.loggedFlag = true;
        } else {
          this.loggedFlag = false;
        }
      }
    );
  }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.userService.login(this.username, this.password)
      .subscribe(
        (user: any) => {
          this.errorFlag = false;
          this.sharedService.user = user;
          this.loggedFlag = true;
          if (this.route.url === '/login') {
            this.route.navigate(['/profile']);
          }
        },
        (error: any) => {
          console.log(error);
          this.errorFlag = true;
        }
      );
  }

  // test() {
  //   console.log(this.sharedService.user);
  // }
}
