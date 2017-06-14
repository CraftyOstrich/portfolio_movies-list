import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./shared/components/header/header.component";
import {LoginComponent} from "./shared/components/login/login.component";
import { DiscoverComponent } from './components/discover/discover.component';
import { MoviesDetailComponent } from './components/movies-detail/movies-detail.component';

import {AppRouterModule} from "./app-routing.module";

import { RegistrationComponent } from './shared/components/registration/registration.component';
import { ItemBlockComponent } from './shared/components/item-block/item-block.component';
import {MoviesService} from "./shared/services/movies.service";
import { MoviesComponent } from './components/movies/movies.component';
import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,

    DiscoverComponent,
    MoviesDetailComponent,


    MoviesComponent
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
