import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../shared/services/movies.service";
import {IMovie} from "../../models/movie";


@Component({
  selector: 'app-overview',
  templateUrl: 'discover.component.html',
  styleUrls: ['discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  errorMessage: string;
  movies: IMovie[];
  link: string = '/movie/top_rated';


  constructor(public _moviesService: MoviesService) { }

  ngOnInit() {
    this._moviesService.getMovies(this.link)
      .subscribe(response => this.movies = response.results || [],
        error => this.errorMessage = <any>error);
  }
}
