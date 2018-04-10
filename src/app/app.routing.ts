import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './components/User/register/register.component';
import {ProfileComponent} from './components/User/profile/profile.component';
import {LoginComponent} from './components/User/login/login.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
