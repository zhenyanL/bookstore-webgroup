import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

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

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.errorFlag = false;

    this.userService.login(this.username, this.password)
      .subscribe(
        (user: any) => {
          this.sharedService.user = user;
          this.errorFlag = false;
          this.router.navigate(['/profile']);
        },
        (error: any) => {
          console.log(error);
          this.errorFlag = true;
        }
      );
  }

  register() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {
    this.username = null;
    this.password = null;
  }

}
