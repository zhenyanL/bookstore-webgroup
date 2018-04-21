import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  username: string;
  password: string;
  role: string;
  errorMsg: string;

  constructor(private userService: UserService, private sharedService: SharedService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    const verify = this.registerForm.value.verify;

    if (this.password === verify) {
      this.userService.register(this.username, this.password, this.role).subscribe(
        (user) => {
          this.sharedService.updateUser(user);
          alert(this.username + ' has been created!');
          this.sharedService.user = user;
          this.router.navigate(['/profile']);
        },
        (error: any) => {
          console.log(error);
          this.errorMsg = error._body;
        }
      );
    } else {
      this.errorMsg = 'Password mis-matching!';
    }
  }

}
