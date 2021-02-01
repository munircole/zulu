import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardLayoutModule } from './dashboard-layout/dashboard-layout.module';

import { ErrorPageComponent } from './errors/404.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './dashboard-layout/dashboard-layout.module#DashboardLayoutModule'
      }
    ]
  },
  { path: '**', component: ErrorPageComponent, pathMatch: 'full' }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
