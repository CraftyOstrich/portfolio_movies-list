import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./shared/components/login/login.component";

import {NgModule} from "@angular/core";
import {RegistrationComponent} from "./shared/components/registration/registration.component";
import  { DiscoverComponent} from "./components/discover/discover.component";
import {MoviesComponent} from "./components/movies/movies.component";
import {MovieDetailComponent} from "./components/movie-detail/movie-detail.component";

const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'overview', component: DiscoverComponent},
  {path: 'overview/movie', component: DiscoverComponent},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/popular', component: MoviesComponent},
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}
