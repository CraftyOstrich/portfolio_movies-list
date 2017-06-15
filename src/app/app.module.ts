import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DiscoverComponent } from './components/discover/discover.component';
import {AppRouterModule} from "./app-routing.module";
import { MoviesComponent } from './components/movies/movies.component';
import {SharedModule} from "./shared/shared.module";
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';


@NgModule({
  declarations: [
    AppComponent,

    DiscoverComponent,



    MoviesComponent,



    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
