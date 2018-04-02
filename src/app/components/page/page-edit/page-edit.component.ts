import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  pageId: string;
  userId: string;
  websiteId: string;
  page: Page;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private route: Router) {
    this.page = new Page('', '', '');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.pageId = params['pid'];
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      return this.pageService.findPageById(this.pageId).subscribe(
        (page: Page) => {
          this.page = page;
        }
      );
    });
  }

  updatePage() {
    this.activatedRoute.params.subscribe(params => {
      return this.pageService.updatePage(this.page).subscribe(
        (data: any) => {
          alert(this.page.name + ' saved successfully');
          this.route.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
        }
      );
    });
  }

  deletePage() {
    this.activatedRoute.params.subscribe(params => {
      return this.pageService.deletePage(this.pageId).subscribe(
        (data: any) => {
          this.route.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
        }
      );
    });
  }
}
