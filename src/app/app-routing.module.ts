import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./shared/components/login/login.component";

import {NgModule} from "@angular/core";
import {RegistrationComponent} from "./shared/components/registration/registration.component";
import  { DiscoverComponent} from "./components/discover/discover.component";
import {MoviesComponent} from "./components/movies/movies.component";
import {MovieDetailComponent} from "./components/movie-detail/movie-detail.component";
import {SerialsComponent} from "./components/serials/serials.component";
import {SerialDetailComponent} from "./components/serial-detail/serial-detail.component";
import {PeopleComponent} from "./components/people/people.component";
import {PersonDetailComponent} from "./components/person-detail/person-detail.component";

const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'overview/movie', component: DiscoverComponent},
  {path: 'overview/tv', component: DiscoverComponent},
  {path: 'movie', component: MoviesComponent},
  {path: 'serials', component: SerialsComponent},
  {path: 'tv/popular', component: SerialsComponent},
  {path: 'tv/top_rated', component: SerialsComponent},
  {path: 'tv/on_the_air', component: SerialsComponent},
  {path: 'tv/airing_today', component: SerialsComponent},
  {path: 'movie/popular', component: MoviesComponent},
  {path: 'movie/top_rated', component: MoviesComponent},
  {path: 'movie/upcoming', component: MoviesComponent},
  {path: 'movie/now_playing', component: MoviesComponent},
  {path: 'person', component: PeopleComponent },
  {path: 'person/popular', component: PeopleComponent},
  {path: 'person/:id', component: PersonDetailComponent},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: 'tv/:id', component: SerialDetailComponent},
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}
