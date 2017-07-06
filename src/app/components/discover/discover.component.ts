import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../shared/services/movies.service";
import { Movie} from "../../models/movie";
import {Tv} from "../../models/tv";
import {SearchService} from "../../shared/services/search.service";
import {Genre} from "../../models/genre";


@Component({
  selector: 'app-overview',
  templateUrl: 'discover.component.html',
  styleUrls: ['discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  errorMessage: string;
  videos: (Movie | Tv)[];
  genres: Genre[];
  private UrlMovies: string = '/discover/movie';
  private UrlTVs: string = '/discover/tv';
  private UrlMovieGenres: string = '/genre/movie/list';
  private UrlTvGenres: string = '/genre/tv/list';
  private CurrentUrl: string = '/discover/movie';
  private CurrentUrlGenres: string = '/genre/movie/list';

  constructor(public _moviesService: MoviesService, public _searchService: SearchService) { }

  ngOnInit() {
    let href = window.location.href.slice(21);
    if (href ==='/overview/movie') {
      this.CurrentUrl = this.UrlMovies;
    } else if (href === '/overview/tv') {
      this.CurrentUrl = this.UrlTVs;
    }
    this._moviesService.getContent(this.CurrentUrl)
      .subscribe(response => this.videos = response.results || [],
        error => this.errorMessage = <any>error);
    if (this.CurrentUrl === this.UrlMovies) {
      this.CurrentUrlGenres = this.UrlMovieGenres;
    } else if (this.CurrentUrl === this.UrlTVs) {
      this.CurrentUrlGenres = this.UrlTvGenres
    }
  }


  onFilterChange(optionsUrl: string) {
    let href = window.location.href.slice(21);
    if (href ==='/overview/movie') {
      href = this.UrlMovies;
    } else if (href === '/overview/tv') {
      href = this.UrlTVs;
    }
    if (optionsUrl) {
      this.getVideo(href, '&' + optionsUrl);
    }
  }

  getVideo(href: string, options: string) {
    this._searchService.getContent(href, options)
      .subscribe(response => this.videos = response.results || [],
        error => this.errorMessage = <any>error);
  }
}
