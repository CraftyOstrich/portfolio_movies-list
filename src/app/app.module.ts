import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { COMPONENTS } from './components/index';

@NgModule({
  declarations: [
    ...COMPONENTS,
    AppComponent,
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
export class AppModule {
}
