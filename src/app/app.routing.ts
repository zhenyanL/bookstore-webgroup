import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {LoginComponent} from './components/user/login/login.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {RegisterComponent} from './components/user/register/register.component';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {WebsiteNewComponent} from './components/website/website-new/website-new.component';
import {WebsiteEditComponent} from './components/website/website-edit/website-edit.component';
import {PageListComponent} from './components/page/page-list/page-list.component';
import {PageNewComponent} from './components/page/page-new/page-new.component';
import {PageEditComponent} from './components/page/page-edit/page-edit.component';
import {WidgetListComponent} from './components/widget/widget-list/widget-list.component';
import {WidgetChooserComponent} from './components/widget/widget-chooser/widget-chooser.component';
import {WidgetEditComponent} from './components/widget/widget-edit/widget-edit.component';
import {WidgetTextComponent} from './components/widget/widget-edit/widget-text/widget-text.component';
import {WidgetHtmlComponent} from './components/widget/widget-edit/widget-html/widget-html.component';
import {WidgetYoutubeComponent} from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import {WidgetImageComponent} from './components/widget/widget-edit/widget-image/widget-image.component';
import {WidgetHeaderComponent} from './components/widget/widget-edit/widget-header/widget-header.component';
import {FlickrImageSearchComponent} from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user/:uid', component: ProfileComponent},
  {path: 'user/:uid/website', component: WebsiteListComponent},
  {path: 'user/:uid/website/new', component: WebsiteNewComponent},
  {path: 'user/:uid/website/:wid',	 component:	WebsiteEditComponent},
  {path: 'user/:uid/website/:wid/page', component:	PageListComponent},
  {path: 'user/:uid/website/:wid/page/new', component:	PageNewComponent},
  {path: 'user/:uid/website/:wid/page/:pid', component:	PageEditComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget', component:	WidgetListComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/new', component:	WidgetChooserComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component:	WidgetEditComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/new/header', component: WidgetHeaderComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/new/image', component: WidgetImageComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/new/youtube', component: WidgetYoutubeComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/new/html', component: WidgetHtmlComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/new/text', component: WidgetTextComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/flickr', component: FlickrImageSearchComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
