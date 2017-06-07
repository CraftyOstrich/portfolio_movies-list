import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {OverviewComponent} from "./overview/overview.component";
import {NgModule} from "@angular/core";
import {MoviesDetailComponent} from "./movies-detail/movies-detail.component";
import {RegistrationComponent} from "./registration/registration.component";
const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'overview/:id', component: MoviesDetailComponent},
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}
