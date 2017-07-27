import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { NgModule } from '@angular/core';
import { DiscoverComponent } from './components/discover/discover.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { PeopleComponent } from './components/people/people.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { TvsComponent } from './components/tvs/tvs.component';
import { TvDetailComponent } from './components/tv-detail/tv-detail.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'discover/:type',
    component: DiscoverComponent,
    canActivate: [AuthGuardService] },
  {
    path: 'movie/:type',
    component: MoviesComponent,
    canActivate: [AuthGuardService] },
  {
    path: 'movie/detail/:id',
    component: MovieDetailComponent,
    canActivate: [AuthGuardService] },
  {
    path: 'tv/:type',
    component: TvsComponent,
    canActivate: [AuthGuardService] },
  {
    path: 'tv/detail/:id',
    component: TvDetailComponent,
    canActivate: [AuthGuardService] },
  {
    path: 'person',
    component: PeopleComponent,
    canActivate: [AuthGuardService] },
  {
    path: 'person/popular',
    component: PeopleComponent,
    canActivate: [AuthGuardService] },
  {
    path: 'person/:id',
    component: PersonDetailComponent,
    canActivate: [AuthGuardService] },
  {
    path: '',
    redirectTo: 'discover/movie',
    pathMatch: 'full' },
  {
    path: '**',
    redirectTo: 'discover/movie',
    pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {
}
