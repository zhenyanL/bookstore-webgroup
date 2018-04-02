import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  websiteId: string;
  userId: string;
  page: Page;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.page = new Page( '', this.websiteId, '');
    });
  }

  createPage() {
    this.pageService.createPage(this.websiteId, this.page).subscribe(
      (data: any) => {
        alert(this.page.name + ' has been created!');
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
      }
    );
  }

}
