import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  errorFlag: boolean;
  user: User;

  constructor(private userService: UserService, private router: Router) {}

  register() {
    const userName = this.registerForm.value.username;
    const password = this.registerForm.value.password;
    const verify = this.registerForm.value.verify;
    if (password !== verify) {
      this.errorFlag = true;
    } else {
      this.errorFlag = false;
      this.user = new User(userName, password, '', '', '');
      this.userService.createUser(this.user).subscribe(
        (user) => {
          alert(this.user.username + ' has been created!');
          this.router.navigate(['/user', user._id]);
      });
    }
  }

  ngOnInit() {
  }

}
