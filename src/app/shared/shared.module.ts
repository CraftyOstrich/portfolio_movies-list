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
import { PersonBlockComponent } from './components/person-block/person-block.component';
import { PersonDetailComponent } from '../components/person-detail/person-detail.component';
import {PeopleService} from "./services/people.service";
import {FilmDisplayDirective} from "./directives/film-display.directive";
import {SortByPipe} from "./sort.pipe";
import { WorkComponent } from './components/work/work.component';

@NgModule ({
  declarations: [
    HeaderComponent,
    ItemBlockComponent,
    LoginComponent,
    RegistrationComponent,
    ActionsComponent,
    ItemDetailComponent,
    PersonBlockComponent,
    PersonDetailComponent,
    DisplayDirective,
    FilmDisplayDirective,
    SortByPipe,
    WorkComponent
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
    DisplayDirective,
    PersonBlockComponent,
    PersonDetailComponent,
    FilmDisplayDirective,
    SortByPipe,
    WorkComponent

  ],
  providers: [
    MoviesService,
    SerialsService,
    PeopleService
  ]
})
export class SharedModule {}
