import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../services/page.service.client';
import { ActivatedRoute } from '@angular/router';
import { Page } from '../../../models/page.model.client';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  websiteId: string;
  pages: any[];

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.websiteId = params['wid'];
      return this.pageService.findAllPagesForWebsite(this.websiteId).subscribe(
        (pages) => {
          this.pages = pages;
        }
      );
    });
  }

}
