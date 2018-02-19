import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/services/movies.service';
import { Movie } from '../../models/movie';
import { Tv } from '../../models/tv';
import { SearchService } from '../../shared/services/search.service';
import { ActivatedRoute, Params } from '@angular/router';
import { API_CONFIG } from '../../app-config';
import { GeneralType } from '../../shared/constants/generalData';
import { GenresService } from '../../shared/services/genres.service';
import { Genre } from '../../models/genre';
import { TvsService } from '../../shared/services/tvs.service';

@Component( {
  selector: 'app-overview',
  templateUrl: 'discover.component.html',
  styleUrls: [ 'discover.component.scss' ]
} )

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
  private _currentUrl: string = '';
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

  constructor ( private _genreService: GenresService,
                private _moviesService: MoviesService,
                private _tvsService: TvsService,
                private _searchService: SearchService,
                private _route: ActivatedRoute ) {
  }

  ngOnInit () {
    this._route.params.subscribe( ( params: Params ) => {
      this.currentPage = 1;
      this.videos = [];
      if ( GeneralType.MOVIE === params.type ) {
        this._currentUrl = API_CONFIG.DISCOVER_MOVIES;
        this._getContent( API_CONFIG.DISCOVER_MOVIES, this.currentPage );
      } else if ( GeneralType.TV === params.type ) {
        this._currentUrl = API_CONFIG.DISCOVER_TVS;
        this._getContent( API_CONFIG.DISCOVER_TVS, this.currentPage );
      }
    } );
  }

  /**
   * Return result, when filter value change
   * @param _optionsUrl
   */
  public onFilterChange ( _optionsUrl: string ) {
    this.currentPage = 1;
    if ( _optionsUrl ) {
      this._optionsUrl = _optionsUrl;
      this._getFilterContent( this._currentUrl, this.currentPage, '&' + _optionsUrl );
    }
  }

  /**
   * Return content, when page is changed
   * @param currentPage
   */
  public onPageChange ( currentPage: number ) {
    if ( this.currentPage !== currentPage ) {
      this.currentPage = currentPage;
      if ( this._optionsUrl ) {
        this._getFilterContent( this._currentUrl, this.currentPage, '&' + this._optionsUrl );
      } else {
        this._getContent( this._currentUrl, this.currentPage );
      }
    }
  }

  /**
   * Get content from API
   * @param link
   * @param page
   * @private
   */
  private _getContent ( link: string, page: number ) {
    if ( API_CONFIG.DISCOVER_MOVIES === link ) {
      this._moviesService.getContent( link, page )
          .subscribe( response => {
                if ( response.results.length ) {
                  for ( let i = 0; i < response.results.length; i++ ) {
                    const genres = response.results[ i ].genre_ids.reduce( ( result, genreId ) => {
                      const item = this._genreService.genres[ GeneralType.MOVIE ].find( ( g: Genre ) => +g.id === +genreId );
                      if ( item && item.name ) {
                        result.push( item.name.toLowerCase() );
                      }
                      return result;
                    }, [] );
                    let movie = new Movie( response.results[ i ], genres );
                    this.videos.push( movie )
                  }
                  this.pagesNumber = response.total_pages;
                }
              },
              error => this._errorMessage = <any>error );
    } else if ( API_CONFIG.DISCOVER_TVS === link ) {
      this._tvsService.getContent( link, page )
          .subscribe( response => {
                if ( response.results.length ) {
                  for ( let i = 0; i < response.results.length; i++ ) {
                    const genres = response.results[ i ].genre_ids.reduce( ( result, genreId ) => {
                      const item = this._genreService.genres[ GeneralType.TV ].find( ( g: Genre ) => +g.id === +genreId );
                      if ( item && item.name ) {
                        result.push( item.name.toLowerCase() );
                      }
                      return result;
                    }, [] );
                    let tv = new Tv( response.results[ i ], genres );
                    this.videos.push( tv )
                  }
                  this.pagesNumber = response.total_pages;
                }
              },
              error => this._errorMessage = <any>error );
    }

  }

  /**
   * Get filter content from API
   * @param link
   * @param page
   * @param options
   * @private
   */
  private _getFilterContent ( link: string, page: number, options: string ) {
    this._searchService.getFilterContent( link, page, options )
        .subscribe( response => {
              this.videos = response.results || [];
              this.pagesNumber = response.total_pages;
            },
            error => this._errorMessage = <any>error );
  }
}
