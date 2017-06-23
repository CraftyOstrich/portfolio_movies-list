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
  linkSerials: string = '/tv/top_rated';


  constructor(public _moviesService: MoviesService) { }

  ngOnInit() {
    let href = window.location.href.slice(21);
    if (href === '/overview' || href ==='/overview/movie') {
      href = this.link;
    } else if (href === '/overview/serials') {
      href = this.linkSerials;
    }
    this._moviesService.getMovies(href)
      .subscribe(response => this.movies = response.results || [],
        error => this.errorMessage = <any>error);
  }
}
