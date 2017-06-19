import {NgModule} from "@angular/core";
import {HeaderComponent} from "./components/header/header.component";
import {ItemBlockComponent} from "./components/item-block/item-block.component";
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppRouterModule} from "../app-routing.module";
import {MoviesService} from "./services/movies.service";
import { ActionsComponent } from './components/actions/actions.component';
import {ItemDetailComponent} from "./components/item-detail/item-detail.component";
import {DisplayDirective} from "./directives/display.directive";
import {SerialsService} from "./services/serials.service";

@NgModule ({
  declarations: [
    HeaderComponent,
    ItemBlockComponent,
    LoginComponent,
    RegistrationComponent,
    ActionsComponent,
    ItemDetailComponent,
    DisplayDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  exports: [
    HeaderComponent,
    ItemBlockComponent,
    LoginComponent,
    RegistrationComponent,
    ActionsComponent,
    ItemDetailComponent,
    DisplayDirective
  ],
  providers: [
    MoviesService,
    SerialsService
  ]
})
export class SharedModule {}
