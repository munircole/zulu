import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { NgChatModule } from 'ng-chat';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { DateAgoPipe} from './pipes/date-ago.pipe';
import { AuthService } from './services/auth.service';
import { ProjectService } from './services/project.service';
import { VidyoClientService } from './services/vidyo-client.service';

import {AuthGuard} from './guard/auth.guard';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AuthInterceptor } from './helpers/auth.interceptor';



import { ErrorPageComponent } from './errors/404.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { RegisterComponent } from './register/register.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    DashboardLayoutComponent,
    DateAgoPipe,
    ErrorPageComponent,
    ForgotPasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModalModule,
    HttpClientModule,
    NgChatModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [
    AuthService,
    ProjectService,
    VidyoClientService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
