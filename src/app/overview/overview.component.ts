import { Component, OnInit } from '@angular/core';

import {IMovie} from "../movies-detail/movie";
import { MoviesService} from "./movies.service";


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  errorMessage: string;
  movies: IMovie[];
  link: string = '/movie/upcoming';

  constructor(private _moviesService: MoviesService) { }

  ngOnInit(): void {
    this._moviesService.getMovies(this.link)
      .subscribe(response => {
        this.movies = response.results || [];
        },
        error => this.errorMessage = <any>error);
  }
}
