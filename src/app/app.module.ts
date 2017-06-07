import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {LoginComponent} from "./login/login.component";
import { OverviewComponent } from './overview/overview.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import {MoviesService} from "./overview/movies.service";
import {AppRouterModule} from "./app-routing.module";

import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    OverviewComponent,
    MoviesDetailComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [MoviesService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
