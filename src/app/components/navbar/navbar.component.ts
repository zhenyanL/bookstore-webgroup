import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../services/user.service.client';
import {SharedService} from '../../services/shared.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Http, Response} from '@angular/http';


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
  city: string;
  weather: string;
  temp: string;
  iconUrl: string;

  constructor(private userService: UserService, private sharedService: SharedService, private route: Router, private http: Http) { }

  ngOnInit() {
    this.city = 'Seattle';
    this.getWeather(this.city);
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
          this.sharedService.updateUser(user);
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

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.getWeather(position);
      });
    } else {
      console.log('its not working');
    }
  }

  getWeather(position) {
    // this.currentLat = position.coords.latitude;
    // this.currentLong = position.coords.longitude;
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&APPID=ea4fb37489cf28675d022490d92886c8';
    // this.url = 'api.openweathermap.org/data/2.5/weather?lat=' + this.currentLat + '&' + 'lon=' + this.currentLong + '&APPID=ea4fb37489cf28675d022490d92886c8';
    (this.http.get(url).map((response: Response) => {
      return response.json();
    })).subscribe((weather: any) => {
      this.weather = this.city + ': ' + weather.weather[0].main;
      this.temp = (weather.main.temp - 273.15).toFixed(2);
      this.iconUrl = 'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png';
    });
  }

  // test() {
  //   console.log(this.sharedService.user);
  // }
}
