import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/services/movies.service';
import { Movie } from '../../models/movie';
import { Tv } from '../../models/tv';
import { SearchService } from '../../shared/services/search.service';
import { ActivatedRoute, Params } from '@angular/router';
import { API_CONFIG } from '../../app-config';

@Component({
  selector: 'app-overview',
  templateUrl: 'discover.component.html',
  styleUrls: ['discover.component.scss']
})

export class DiscoverComponent implements OnInit {
  /**
   * List of movies or tvs
   * @type {(Movie | Tv)[]}
   */
  public videos: (Movie | Tv)[];
  /**
   * Total number of pages
   * @type {number}
   */
  public pagesNumber: number;
  /**
   * Current page, where
   * @type {number}
   */
  public currentPage = 1;
  /**
   * Current value og ganre in this page
   * @type {string}
   */
  public currentUrlGenres: string = API_CONFIG.MOVIES_GENRES;
  /**
   * Current page (default - movies list)
   * @type {string}
   * @private
   */
  private _currentUrl: string = API_CONFIG.DISCOVER_MOVIES;
  /**
   * Filter options
   * @type {string}
   * @private
   */
  private _optionsUrl = '';
  /**
   * Error message
   */
  private _errorMessage: string;

  constructor(private _moviesService: MoviesService,
              private _searchService: SearchService,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.currentPage = 1;
      if (params.type === 'movie') {
        this._currentUrl = API_CONFIG.DISCOVER_MOVIES;
        this.currentUrlGenres = API_CONFIG.MOVIES_GENRES;
      } else if (params.type === 'tv') {
        this._currentUrl = API_CONFIG.DISCOVER_TVS;
        this.currentUrlGenres = API_CONFIG.TVS_GENRES;
      }
      this._getContent(this._currentUrl, this.currentPage);
    });
  }

  /**
   * Return result, when filter value change
   * @param _optionsUrl
   */
  public onFilterChange(_optionsUrl: string) {
    this.currentPage = 1;
    if (_optionsUrl) {
      this._optionsUrl = _optionsUrl;
      this._getFilterContent(this._currentUrl, this.currentPage, '&' + _optionsUrl);
    }
  }

  /**
   * Return content, when page is changed
   * @param currentPage
   */
  public onPageChange(currentPage: number) {
    if (this.currentPage !== currentPage) {
      this.currentPage = currentPage;
      if (this._optionsUrl) {
        this._getFilterContent(this._currentUrl, this.currentPage, '&' + this._optionsUrl);
      } else {
        this._getContent(this._currentUrl, this.currentPage);
      }
    }
  }

  /**
   * Get content from API
   * @param link
   * @param page
   * @private
   */
  private _getContent(link: string, page: number) {
    this._moviesService.getContent(link, page)
      .subscribe(response => {
          this.videos = response.results || [];
          this.pagesNumber = response.total_pages;
        },
        error => this._errorMessage = <any>error);
  }

  /**
   * Get filter content from API
   * @param link
   * @param page
   * @param options
   * @private
   */
  private _getFilterContent(link: string, page: number, options: string) {
    this._searchService.getFilterContent(link, page, options)
      .subscribe(response => {
          this.videos = response.results || [];
          this.pagesNumber = response.total_pages;
        },
        error => this._errorMessage = <any>error);
  }
}
