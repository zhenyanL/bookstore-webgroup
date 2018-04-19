import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedService} from './services/shared.service.client';
import {UserService} from './services/user.service.client';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { LoginComponent } from './components/user/login/login.component';
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

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProfileComponent,
    LoginComponent,
    HomeComponent,
    LogoComponent,
    CartComponent,
    NavbarComponent,
    BookDetailComponent,
    BookNewComponent,
    SlideshowComponent,
    BookEditComponent,
    GelocationComponent
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
  providers: [SharedService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
