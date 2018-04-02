import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private router: Router) { }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.errorFlag = false;

    this.userService.findUserByCredentials(this.username, this.password)
      .subscribe((user) => {
        if (user) {
          this.router.navigate(['/user', user._id ]);
        } else {
          this.errorFlag = true;
        }
      });
  }

  register() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {
    this.username = null;
    this.password = null;
  }

}
