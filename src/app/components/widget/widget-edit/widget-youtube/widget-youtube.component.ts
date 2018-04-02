import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  widgetId: string;
  pageId: string;
  userId: string;
  websiteId: string;
  widget: Widget;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) {
    this.widget = new Widget('', 'YOUTUBE', this.pageId, 3, '', '', '', 1, '', false);
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

  updateYoutube() {
    if (this.widgetId === undefined) {
      this.widgetService.createWidget(this.pageId, this.widget).subscribe(
        (widget: Widget) => {
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

  deleteYoutube() {
    this.activatedRoute.params.subscribe(params => {
      return this.widgetService.deleteWidget(this.widgetId).subscribe(
        (data: any) => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
      );
    });
  }

}
