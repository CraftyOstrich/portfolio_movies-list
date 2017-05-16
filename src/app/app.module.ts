import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {LoginComponent} from "./login/login.component";
import {RouterModule} from "@angular/router";
import { OverviewComponent } from './overview/overview.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'login' , component: LoginComponent},
      {path: 'Overview', component: OverviewComponent},
      {path: '' , redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
