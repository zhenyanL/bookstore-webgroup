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
import {CommentService} from './services/comment.service.server';
import { PrivateProfileComponent } from './components/user/private-profile/private-profile.component';
import { ProfileWriterComponent } from './components/user/public-profile/profile-writer/profile-writer.component';
import {AuthGuard} from './services/auth-guard.service';

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
    ProfileWriterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [SharedService, UserService, BookService, CommentService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
