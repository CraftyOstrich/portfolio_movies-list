import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouterModule } from '../app-routing.module';
import { FilmDisplayDirective } from './directives/film-display.directive';
import { GroupByPipe } from './pipes/groupBy.pipe';
import { SortByYearPipe } from './pipes/sortByYear.pipe';
import { GroupByDepartmentPipe } from './pipes/groupByDepartment.pipe';
import { SHARED_SERVICES } from './services/index';
import { SHARED_COMPONENTS } from './components/index';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
    FilmDisplayDirective,
    GroupByPipe,
    SortByYearPipe,
    GroupByDepartmentPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRouterModule
  ],
  exports: [
    ...SHARED_COMPONENTS,
    FilmDisplayDirective,
  ],
  providers: [
    ...SHARED_SERVICES,
    NgForm,
  ]
})
export class SharedModule {
}
