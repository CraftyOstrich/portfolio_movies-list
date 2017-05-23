import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {LoginComponent} from "./login/login.component";
import {RouterModule} from "@angular/router";
import { OverviewComponent } from './overview/overview.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    OverviewComponent,
    MoviesDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'login' , component: LoginComponent},
      {path: 'overview', component: OverviewComponent},
      {path: '' , redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
