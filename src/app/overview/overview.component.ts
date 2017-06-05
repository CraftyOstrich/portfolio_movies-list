import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

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

  constructor(private _moviesService: MoviesService) { }

  ngOnInit(): void {
    this._moviesService.getMovies()
      .subscribe(movies => this.movies = movies,
                  error => this.errorMessage = <any>error);
  }

}
