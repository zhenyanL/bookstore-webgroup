import {Component, OnInit, ViewChild} from '@angular/core';
import {Http, Response} from '@angular/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-gelocation',
  templateUrl: './gelocation.component.html',
  styleUrls: ['./gelocation.component.css']
})
export class GelocationComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  currentLat = 47.6062;
  currentLong = -122.3321;
  url: string;
  weather: any;
  city =  'loading';
  iconUrl: string;
  currWeather =  'loading';
  currTemp =  'loading';
  minTemp =  'loading';
  maxTemp =  'loading';


  constructor(private http: Http) { }

  ngOnInit() {
    this.city = 'Seattle';
    this.getWeather(this.city);
  }

  // Not working locally. Try location on Haruko.
  // GoogleMap is working now.
  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.getWeather(position);
      });
    } else {
      console.log('its not working');
    }
  }

  // Working for given city name or zip code
  //   {"coord":{"lon":139,"lat":35},
  //   "sys":{"country":"JP","sunrise":1369769524,"sunset":1369821049},
  //   "weather":[{"id":804,"main":"clouds","description":"overcast clouds","icon":"04n"}],
  //   "main":{"temp":289.5,"humidity":89,"pressure":1013,"temp_min":287.04,"temp_max":292.04},
  //   "wind":{"speed":7.31,"deg":187.002},
  //   "rain":{"3h":0},
  //   "clouds":{"all":92},
  //   "dt":1369824698,
  //   "id":1851632,
  //   "name":"Shuzenji",
  //   "cod":200}
  getWeather(position) {
    // this.currentLat = position.coords.latitude;
    // this.currentLong = position.coords.longitude;
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&APPID=ea4fb37489cf28675d022490d92886c8';
    // this.url = 'api.openweathermap.org/data/2.5/weather?lat=' + this.currentLat + '&' + 'lon=' + this.currentLong + '&APPID=ea4fb37489cf28675d022490d92886c8';
    (this.http.get(this.url).map((response: Response) => {
        return response.json();
    })).subscribe((weather: any) => {
      this.weather = weather;
      console.log(this.weather);
      this.iconUrl = 'http://openweathermap.org/img/w/' + this.weather.weather[0].icon + '.png';
      this.currWeather = this.weather.weather[0].main;
      this.currTemp = this.weather.main.temp;
      this.minTemp = this.weather.main.temp_min;
      this.maxTemp = this.weather.main.temp_max;
      this.currentLong = this.weather.coord.lon;
      this.currentLat = this.weather.coord.lat;
      // this.city = this.weather.name;
    });
  }

  onSubmit() {
    this.getWeather(this.city);
  }
}
