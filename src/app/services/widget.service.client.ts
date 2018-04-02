import { Injectable } from '@angular/core';
import { Widget } from '../models/widget.model.client';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class WidgetService {
  constructor(private http: Http) {}

  baseUrl = environment.baseUrl;

  createWidget(pageId: string, widget: Widget) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.post(url, widget).map((response: Response) => {
      return response.json();
    });
}

  findAllWidgetsForPage(pageId: string) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findWidgetById(widgetId: string) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateWidget(newWidget) {
    const url = this.baseUrl + '/api/widget/' + newWidget._id;
    return this.http.put(url, newWidget).map((response: Response) => {
      return response.json();
    });
  }

  deleteWidget(widgetId: string) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.delete(url).map((response: Response) => {
      return response.json();
    });
  }

  reorderWidgets(pageId: string, startIndex: string, endIndex: string) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
    return this.http.put(url, '').map((response: Response) => {
      return response.json();
    });
  }
}
