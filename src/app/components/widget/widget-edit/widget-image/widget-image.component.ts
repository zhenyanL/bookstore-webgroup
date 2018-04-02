import {Component, OnInit} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  widgetId: string;
  pageId: string;
  userId: string;
  websiteId: string;
  widget: Widget;
  baseUrl: string;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) {
    this.widget = new Widget('', 'IMAGE', '', 3, '', '', '', 1, '', false);
  }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
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
      } else {
        return this.widgetService.createWidget(this.pageId, this.widget).subscribe(
          (widget) => {
            this.widget = widget;
            this.widgetId = widget._id;
            console.log(this.widgetId);
          }
        );
      }
    });
  }

  updateImage() {
    this.activatedRoute.params.subscribe(params => {
      return this.widgetService.updateWidget(this.widget).subscribe(
        (data: any) => {
          alert(this.widget.name + ' saved successfully');
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
      );
    });
  }

  deleteImage() {
    this.activatedRoute.params.subscribe(params => {
      return this.widgetService.deleteWidget(this.widgetId).subscribe(
        (data: any) => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
      );
    });
  }

}
