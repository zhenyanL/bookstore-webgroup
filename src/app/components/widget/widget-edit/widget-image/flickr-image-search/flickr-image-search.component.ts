import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {FlickrService} from '../../../../../services/flickr.service.client';
import {Widget} from '../../../../../models/widget.model.client';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  websiteId: string;
  pageId: string;
  userId: string;
  widgetId: string;
  photos: [any];
  error: string;
  searchText: string;
  widget: Widget;

  constructor(private flickrService: FlickrService, private widgetService: WidgetService, private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.widget = new Widget( '', 'IMAGE', '', 3, '', '', '', 1, '', false);
  }

  ngOnInit() {
    // fetch userId, pageId and websiteId from url
    this.activatedRoute.params.subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
          if (this.widgetId !== undefined) {
            return this.widgetService.findWidgetById(this.widgetId).subscribe(
              (widget) => {
                this.widget = widget;
              }
            );
          }
        }
      );
  }

  searchPhotos() {
    this.flickrService.searchPhotos(this.searchText).subscribe(
        (data: any) => {
          let val = data._body;
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1);
          val = JSON.parse(val);
          this.photos = val.photos;
        }
      );


    // .then(function (response) {
    //   let dat = response.data.replace('jsonFlickrApi(', '');
    //   dat = dat.substring(0, dat.length - 1);
    //   dat = JSON.parse(dat);
    //   this.photos = dat.photos;
    // });
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    this.widget.url = url;
    this.activatedRoute.params.subscribe(params => {
      return this.widgetService.updateWidget(this.widget).subscribe(
        (data: any) => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
      );
    });

    // .then(function (response) {
    //   const result = response.data;
    //   if(result){
    //     this.router.url('/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + this.widgetId);
    //   }else{
    //     const error = 'failed!';
    //   }
    // });
  }

}
