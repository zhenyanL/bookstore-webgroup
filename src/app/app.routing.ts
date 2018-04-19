import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './components/user/register/register.component';
import {LoginComponent} from './components/user/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {BookDetailComponent} from './components/book/book-detail/book-detail.component';
import {BookNewComponent} from './components/book/book-new/book-new.component';
import {GelocationComponent} from './components/gelocation/gelocation.component';
import {PrivateProfileComponent} from './components/user/private-profile/private-profile.component';
import {AuthGuard} from './services/auth-guard.service';
import {BookEditComponent} from './components/book/book-edit/book-edit.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: PrivateProfileComponent, canActivate: [AuthGuard]},
  {path: 'bookDetail', component: BookDetailComponent},
  {path: 'addBook', component: BookNewComponent, canActivate: [AuthGuard]},
  {path: 'editBook/:bid', component: BookEditComponent, canActivate: [AuthGuard]},
  {path: 'weather', component: GelocationComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
