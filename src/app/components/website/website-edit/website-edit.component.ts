import {Component, OnInit} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  userId: string;
  websites: Website[];
  webId: string;
  website: Website;

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private route: Router) {
    this.website = new Website( '', '', '');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      return this.websiteService.findWebsitesForUser(this.userId).subscribe(
        (websites: Website[]) => {
          this.websites = websites;
        }
      );
    });
    this.activatedRoute.params.subscribe(params => {
      this.webId = params['wid'];
      return this.websiteService.findWebsiteById(this.webId).subscribe(
        (website: Website) => {
          this.website = website;
        }
      );
    });
  }

  updateWeb() {
    this.activatedRoute.params.subscribe(params => {
      return this.websiteService.updateWebsite(this.website).subscribe(
        (data: any) => {
          alert(this.website.name + ' saved successfully');
          this.route.navigate(['/user', this.userId, 'website']);
        }
      );
    });

  }

  deleteWeb() {
    this.activatedRoute.params.subscribe(params => {
      return this.websiteService.deleteWebsite(this.webId).subscribe(
        (data: any) => {
          this.route.navigate(['/user', this.userId, 'website']);
        }
      );
    });
  }

}
