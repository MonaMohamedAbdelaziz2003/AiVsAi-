import {  Routes } from '@angular/router';
import { HomeComponent } from './user/pages/home/home.component';
import { LoginComponent } from './user/pages/auth/login/login.component';
import { SignupComponent } from './user/pages/auth/signup/signup.component';
import { FirstHomeComponent } from './user/pages/first-home/first-home.component';
import { ChatComponent } from './user/pages/afterLogin/chat/chat.component';
import { HeaderComponent } from './admin/layouts/header/header.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { UsersComponent } from './admin/pages/users/users.component';
import { AdminComponent } from './admin/pages/admin/admin.component';
import { VerifyCodeComponent } from './user/pages/auth/verify-code/verify-code.component';

export const routes: Routes = [
  { path: 'firsthome'  , component: FirstHomeComponent },
  { path: 'firsthome/home'  , component: HomeComponent },
  { path: 'login'  , component: LoginComponent },
  { path: 'signup' , component: SignupComponent },
  { path: 'verify', component: VerifyCodeComponent },

  // ///////////////////////
  { path: 'admin',
    component: HeaderComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'admin', component: AdminComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]},
  { path: ""       , redirectTo: '/firsthome', pathMatch: 'full' },
  { path: 'user'  , component: ChatComponent },

  // { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

