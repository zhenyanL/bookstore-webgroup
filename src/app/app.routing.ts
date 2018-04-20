import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './components/user/register/register.component';
import {LoginComponent} from './components/user/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {BookDetailComponent} from './components/book/book-detail/book-detail.component';
import {BookNewComponent} from './components/book/book-new/book-new.component';
import {GelocationComponent} from './components/gelocation/gelocation.component';
import {PrivateProfileComponent} from './components/user/private-profile/private-profile.component';
import {AuthGuard} from './services/auth-guard.service';
import {PublicProfileComponent} from './components/user/public-profile/public-profile.component';
import {FollowingListComponent} from './components/user/following-list/following-list.component';
import {FollowedbyListComponent} from './components/user/followedby-list/followedby-list.component';
import {UserListComponent} from './components/user/user-list/user-list.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: PrivateProfileComponent, canActivate: [AuthGuard]},
  {path: 'profile/:uid', component: PublicProfileComponent, canActivate: [AuthGuard]},
  {path: 'profile/:uid/edit', component: PrivateProfileComponent, canActivate: [AuthGuard]},
  {path: 'profile/:uid/following', component: FollowingListComponent, canActivate: [AuthGuard]},
  {path: 'profile/:uid/followedby', component: FollowedbyListComponent, canActivate: [AuthGuard]},
  {path: 'user', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'bookDetail', component: BookDetailComponent},
  {path: 'addBook', component: BookNewComponent},
  {path: 'weather', component: GelocationComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
