import { Page } from '../models/page.model.client';
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class PageService {
  constructor(private http: Http) {}

  baseUrl = environment.baseUrl;

  createPage(websiteId: string, page: Page) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.post(url, page).map((response: Response) => {
      return response.json();
    });
  }

  findAllPagesForWebsite(websiteId: string) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findPageById(pageId: string) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updatePage(newPage) {
    const url = this.baseUrl + '/api/page/' + newPage._id;
    return this.http.put(url, newPage).map((response: Response) => {
      return response.json();
    });
  }

  deletePage(pageId: string) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.delete(url).map((response: Response) => {
      return response.json();
    });
  }
}
