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
  videos: any[];
  link: string = '/movie/popular';

  constructor(public _moviesService: MoviesService) { }

  ngOnInit() {
    let href = window.location.href.slice(21);
    if (href === '/movie') {
      href = this.link;
    }
    this._moviesService.getMovies(href)
      .subscribe(response => this.videos = response.results || [],
        error => this.errorMessage = <any>error);

  }

}
