import { Website } from '../models/website.model.client';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

import {environment} from '../../environments/environment';

@Injectable()
export class WebsiteService {
  constructor(private http: Http) {}

  baseUrl = environment.baseUrl;

  createWebsite(userId: string, website: Website) {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.post(url, website).map((response: Response) => {
      return response.json();
    });
  }

  findWebsitesForUser(userId: string) {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findWebsiteById(websiteId: string) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateWebsite(newWebsite) {
    const url = this.baseUrl + '/api/website/' + newWebsite._id;
    return this.http.put(url, newWebsite).map((response: Response) => {
      return response.json();
    });
  }

  deleteWebsite(websiteId: string) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.delete(url).map((response: Response) => {
      return response.json();
    });
  }
}
