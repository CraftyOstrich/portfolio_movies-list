import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../../shared/services/movies.service";
import { Movie } from "../../models/movie";
import { Tv } from "../../models/tv";
import { SearchService } from "../../shared/services/search.service";
import { Genre } from "../../models/genre";
import { ActivatedRoute, Params } from '@angular/router';
import { API_CONFIG } from '../../app-config';

@Component({
  selector: 'app-overview',
  templateUrl: 'discover.component.html',
  styleUrls: ['discover.component.scss']
})

export class DiscoverComponent implements OnInit {
  videos: (Movie | Tv)[];
  genres: Genre[];
  pagesNumber: number;
  currentPage: number = 1;
  currentUrlGenres: string = API_CONFIG.MOVIES_GENRES;

  private _currentUrl: string = API_CONFIG.DISCOVER_MOVIES;
  private _optionsUrl: string = '';
  private _errorMessage: string;

  constructor(private _moviesService: MoviesService,
              private _searchService: SearchService,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {
    //console.log(this._route.snapshot);
    this._route.params.subscribe((params: Params) => {
      // init();
      this.currentPage = 1;
      if (params.type === 'movie') {
        this._currentUrl = API_CONFIG.DISCOVER_MOVIES;
        this.currentUrlGenres = API_CONFIG.MOVIES_GENRES;
      } else if (params.type === 'tv') {
        this._currentUrl = API_CONFIG.DISCOVER_TVS;
        this.currentUrlGenres = API_CONFIG.TVS_GENRES;
      }
      //console.log(this._currentUrl);
      this.getContent(this._currentUrl, this.currentPage);
    });
  }

  onFilterChange(_optionsUrl: string) {
    this.currentPage = 1;
    if (_optionsUrl) {
      this._optionsUrl = _optionsUrl;
      this.getFilterContent(this._currentUrl, this.currentPage, '&' + _optionsUrl);
    }
  }

  onPageChange(currentPage: number) {
    if (this.currentPage !== currentPage) {
      this.currentPage = currentPage;
      if (this._optionsUrl) {
        this.getFilterContent(this._currentUrl, this.currentPage, '&' + this._optionsUrl);
      } else {
        this.getContent(this._currentUrl, this.currentPage);
      }
    }
  }

  getContent(link: string, page: number) {
    this._moviesService.getContent(link, page)
      .subscribe(response => {
          this.videos = response.results || [];
          this.pagesNumber = response.total_pages;
        },
        error => this._errorMessage = <any>error);
  }

  getFilterContent(link: string, page: number, options: string) {
    this._searchService.getFilterContent(link, page, options)
      .subscribe(response => {
          this.videos = response.results || [];
          this.pagesNumber = response.total_pages;
        },
        error => this._errorMessage = <any>error);
  }
}
