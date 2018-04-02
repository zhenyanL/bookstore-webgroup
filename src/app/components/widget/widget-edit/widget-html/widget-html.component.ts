import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {
  widgetId: string;
  pageId: string;
  userId: string;
  websiteId: string;
  widget: any;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) {
    this.widget = new Widget('', 'HTML', this.pageId, 3, '', '', '', 1, '', false);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.pageId = params['pid'];
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.widgetId = params['wgid'];
      if (this.widgetId !== undefined) {
        return this.widgetService.findWidgetById(this.widgetId).subscribe(
          (widget) => {
            this.widget = widget;
          }
        );
      }
    });
  }

  updateHtml() {
    if (this.widgetId === undefined) {
      this.widgetService.createWidget(this.pageId, this.widget).subscribe(
        (widget) => {
          this.widget = widget;
          alert(this.widget.name + ' saved successfully');
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
      );
    } else {
      this.activatedRoute.params.subscribe(params => {
        return this.widgetService.updateWidget(this.widget).subscribe(
          (data: any) => {
            alert(this.widget.name + ' saved successfully');
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
          }
        );
      });
    }
  }

  deleteHtml() {
    this.activatedRoute.params.subscribe(params => {
      return this.widgetService.deleteWidget(this.widgetId).subscribe(
        (data: any) => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
      );
    });
  }

}
