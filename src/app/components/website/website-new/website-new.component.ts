import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  userId: string;
  websites: Website[];
  website: Website;

  constructor(private activatedRoute: ActivatedRoute, private websiteService: WebsiteService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.website = new Website('', this.userId, '');
      return this.websiteService.findWebsitesForUser(this.userId).subscribe(
        (websites: Website[]) => {
          this.websites = websites;
        }
      );
    });
  }

  createWeb() {
    this.websiteService.createWebsite(this.userId, this.website).subscribe(
      (data: any) => {
        alert(this.website.name + ' has been created!');
        this.router.navigate(['user', this.userId, 'website']);
      }
    );
  }

}
