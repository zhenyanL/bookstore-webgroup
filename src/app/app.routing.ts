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
import {BookEditComponent} from './components/book/book-edit/book-edit.component';
import {CommentNewComponent} from './components/comment/comment-new/comment-new.component';
import {CartContentComponent} from './components/cart-content/cart-content.component';
import {CommentEditComponent} from './components/comment/comment-edit/comment-edit.component';
import {BookListComponent} from './components/book/book-list/book-list.component';
import {BuyerListComponent} from './components/user/buyer-list/buyer-list.component';
import {EditorComponent} from './components/writebook/editor/editor.component';
import {SharedBookComponent} from './components/writebook/new-shared-book/shared-book.component';
import {SharedBookService} from './services/shared-book.service';
import {SharedBookListComponent} from './components/writebook/shared-book-list/shared-book-list.component';
import {BookSearchComponent} from './components/book/book-search/book-search.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'weather', component: GelocationComponent},
  {path: 'cart', component: CartContentComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: PrivateProfileComponent, canActivate: [AuthGuard]},
  {path: 'profile/:uid', component: PublicProfileComponent, canActivate: [AuthGuard]},
  {path: 'profile/:uid/book', component: BookListComponent, canActivate: [AuthGuard]},
  {path: 'profile/:uid/edit', component: PrivateProfileComponent, canActivate: [AuthGuard]},
  {path: 'profile/:uid/following', component: FollowingListComponent, canActivate: [AuthGuard]},
  {path: 'profile/:uid/followedby', component: FollowedbyListComponent, canActivate: [AuthGuard]},
  {path: 'user', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'book/search', component: BookSearchComponent},
  {path: 'book/new', component: BookNewComponent, canActivate: [AuthGuard]},
  {path: 'book/:bid', component: BookDetailComponent},
  {path: 'book/:bid/user', component: BuyerListComponent},
  {path: 'book/:bid/edit', component: BookEditComponent, canActivate: [AuthGuard]},
  {path: 'book/:bid/comment/new', component: CommentNewComponent, canActivate: [AuthGuard]},
  {path: 'book/:bid/comment/:cid', component: CommentEditComponent, canActivate: [AuthGuard]},
  {path: 'user/:uid/sharedBook/:bid', component: EditorComponent, canActivate: [AuthGuard]},
  {path: 'newSharedBook', component: SharedBookComponent, canActivate: [AuthGuard]},
  {path: 'sharedBookList', component: SharedBookListComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
