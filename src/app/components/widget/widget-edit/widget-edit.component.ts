import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  widgetId: string;
  widget: Widget;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService) {
    this.widget = new Widget('', '', '', 3, '', '', '', 1, '', false);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.widgetId = params['wgid'];
      return this.widgetService.findWidgetById(this.widgetId).subscribe(
        (widget: Widget) => {
          this.widget = widget;
        }
      );
    });
  }

}
