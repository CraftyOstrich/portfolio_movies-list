import {Component, OnInit, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
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
  optionsUrl: string = '';
  pagesNumber: number;
  currentPage: number = 1;
  private UrlMovies: string = '/discover/movie';
  private UrlTVs: string = '/discover/tv';
  private UrlMovieGenres: string = '/genre/movie/list';
  private UrlTvGenres: string = '/genre/tv/list';
  private CurrentUrl: string = '/discover/movie';
  private CurrentUrlGenres: string = '/genre/movie/list';

  constructor(public _moviesService: MoviesService, public _searchService: SearchService) { }

  ngOnInit() {
    let href = window.location.href.slice(21);
    this.currentPage = 1;
    if (href ==='/overview/movie') {
      this.CurrentUrl = this.UrlMovies;
    } else if (href === '/overview/tv') {
      this.CurrentUrl = this.UrlTVs;
    }
    this._moviesService.getContent(this.CurrentUrl, this.currentPage)
      .subscribe(response => {
        this.videos = response.results || [];
        this.pagesNumber  = response.total_pages;
      },
        error => this.errorMessage = <any>error);
    if (this.CurrentUrl === this.UrlMovies) {
      this.CurrentUrlGenres = this.UrlMovieGenres;
    } else if (this.CurrentUrl === this.UrlTVs) {
      this.CurrentUrlGenres = this.UrlTvGenres
    }
  }


  onFilterChange(optionsUrl: string) {
    let href = window.location.href.slice(21);
    this.currentPage = 1;
    if (href ==='/overview/movie') {
      this.CurrentUrl = this.UrlMovies;
    } else if (href === '/overview/tv') {
      this.CurrentUrl = this.UrlTVs;
    }
    if (optionsUrl) {
      this.optionsUrl = optionsUrl;
      this.getFilterContent(this.CurrentUrl, this.currentPage, '&' + optionsUrl);
    }
  }

  onPageChange(currentPage: number) {
    if (this.currentPage !== currentPage) {
      if (this.optionsUrl) {
        this.getFilterContent(this.CurrentUrl, this.currentPage, '&' + this.optionsUrl);
      } else {
        this.currentPage = currentPage;
        this._moviesService.getContent(this.CurrentUrl, this.currentPage)
          .subscribe(response =>
              this.videos = response.results || [],
            error => this.errorMessage = <any>error);
      }
      }
  }

  getFilterContent(href: string, page: number, options: string) {
    this._searchService.getFilterContent(href, page, options)
      .subscribe(response => {
          this.videos = response.results || [];
          this.pagesNumber  = response.total_pages;
        },
        error => this.errorMessage = <any>error);
  }
}
