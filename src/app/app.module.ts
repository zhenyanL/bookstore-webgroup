import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedService} from './services/shared.service.client';
import {UserService} from './services/user.service.client';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { PublicProfileComponent } from './components/user/public-profile/public-profile.component';
import { ProfileSellerComponent } from './components/user/public-profile/profile-seller/profile-seller.component';
import { ProfileBuyerComponent } from './components/user/public-profile/profile-buyer/profile-buyer.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import {BookService} from './services/book.service.client';
import {CommentService} from './services/comment.service.client';
import { PrivateProfileComponent } from './components/user/private-profile/private-profile.component';
import { ProfileWriterComponent } from './components/user/public-profile/profile-writer/profile-writer.component';
import {AuthGuard} from './services/auth-guard.service';
import { HomeComponent } from './components/home/home.component';
import { LogoComponent } from './components/logo/logo.component';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
import { BookNewComponent } from './components/book/book-new/book-new.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { BookEditComponent } from './components/book/book-edit/book-edit.component';
import { GelocationComponent } from './components/gelocation/gelocation.component';
import {CommonModule} from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { CommentNewComponent } from './components/comment/comment-new/comment-new.component';
import {CartService} from './services/cart.service.client';
import { CartContentComponent } from './components/cart-content/cart-content.component';
import { CommentEditComponent } from './components/comment/comment-edit/comment-edit.component';
import { FollowingListComponent } from './components/user/following-list/following-list.component';
import { FollowedbyListComponent } from './components/user/followedby-list/followedby-list.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { BuyerListComponent } from './components/user/buyer-list/buyer-list.component';
import { SharedBookComponent } from './components/writebook/new-shared-book/shared-book.component';
import {SharedBookService} from './services/shared-book.service';
import { EditorComponent } from './components/writebook/editor/editor.component';
import {CollaborationService} from './services/collaboration.service';
import { SharedBookListComponent } from './components/writebook/shared-book-list/shared-book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PublicProfileComponent,
    ProfileSellerComponent,
    ProfileBuyerComponent,
    UserListComponent,
    PrivateProfileComponent,
    ProfileWriterComponent,
    HomeComponent,
    LogoComponent,
    CartComponent,
    NavbarComponent,
    BookDetailComponent,
    BookNewComponent,
    SlideshowComponent,
    BookEditComponent,
    GelocationComponent,
    FollowingListComponent,
    FollowedbyListComponent,
    CommentNewComponent,
    CommentEditComponent,
    CartContentComponent,
    BookListComponent,
    BuyerListComponent,
    SharedBookComponent,
    EditorComponent,
    SharedBookListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAf-g21YJ_o0NjbCZIGBFPlDIx5o68tJ7g'
    })
  ],
  providers: [SharedService, UserService, BookService, CommentService, AuthGuard, CartService, SharedBookService, CollaborationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
