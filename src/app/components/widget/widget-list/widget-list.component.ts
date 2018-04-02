import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {DomSanitizer} from '@angular/platform-browser';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  widgets: any[];
  pageId: string;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService,  private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.pageId = params['pid'];
      return this.widgetService.findAllWidgetsForPage(this.pageId).subscribe(
        (widgets) => {
          this.widgets = widgets;
        }
      );
    });
  }

  getURL(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url.toString());
  }

  reorderItems(indexes) {
    // console.log('start: ' + indexes.startIndex);
    // console.log('stop: ' + indexes.endIndex);
    this.widgetService.reorderWidgets(this.pageId, indexes.startIndex, indexes.endIndex).subscribe();
  }

}
