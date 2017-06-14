import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./shared/components/login/login.component";

import {NgModule} from "@angular/core";
import {MoviesDetailComponent} from "./components/movies-detail/movies-detail.component";
import {RegistrationComponent} from "./shared/components/registration/registration.component";
import  { DiscoverComponent} from "./components/discover/discover.component";
import {MoviesComponent} from "./components/movies/movies.component";
const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'overview', component: DiscoverComponent},
  {path: 'overview/movie', component: DiscoverComponent},
  {path: 'overview/:id', component: MoviesDetailComponent},
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
