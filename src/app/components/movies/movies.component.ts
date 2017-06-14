import { Component, OnInit } from '@angular/core';
import {IMovie} from "../../models/movie";
import {MoviesService} from "../../shared/services/movies.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  errorMessage: string;
  movies: IMovie[];
  link: string = '/movie/popular';

  constructor(public _moviesService: MoviesService) { }

  ngOnInit() {
    this._moviesService.getMovies(this.link)
      .subscribe(response => this.movies = response.results || [],
        error => this.errorMessage = <any>error);
  }

}
