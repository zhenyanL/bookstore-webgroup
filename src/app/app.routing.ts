import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {LoginComponent} from './components/user/login/login.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
