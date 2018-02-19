import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../shared/services/movies.service';
import { ActivatedRoute, Params } from '@angular/router';
import { API_CONFIG } from '../../app-config';
import { GenresService } from '../../shared/services/genres.service';
import { GeneralType } from '../../shared/constants/generalData';
import { Genre } from '../../models/genre';

@Component( {
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: [ './movies.component.scss' ]
} )
export class MoviesComponent implements OnInit {
    /**
     * Movie list
     * @type {Movie[]}
     */
    public videos: Movie[];
    /**
     * total number of result pages
     */
    public pagesNumber: number;
    /**
     * Current
     * @type {number}
     */
    public currentPage = 1;
    /**
     * Current part of url, which is depended on type (default - popular)
     * @type {string}
     * @private
     */
    private _currentUrl: string = API_CONFIG.MOVIES_POPULAR;
    /**
     * Error message
     * @type {string}
     */
    private _errorMessage: string;

    constructor ( private _genreService: GenresService, private _moviesService: MoviesService,
                  private  _route: ActivatedRoute ) {
    }

    /**
     * On init page
     * Get movie list and total pages of result
     */
    ngOnInit () {
        this._route.params.subscribe( ( params: Params ) => {
                this.currentPage = 1;
                if ( params.type ) {
                    this._currentUrl = '/movie/' + params.type;
                }
                this.videos = [];
                this._getMovies( this._currentUrl, this.currentPage );
            },
            error => this._errorMessage = <any>error
        );
    }

    /**
     * Get current page and content of this page, when it was changed
     * @param currentPage
     */
    public onPageChange ( currentPage: number ) {
        if ( this.currentPage !== currentPage ) {
            this.currentPage = currentPage;
            this._getMovies( this._currentUrl, this.currentPage );
        }
    }

    /**
     * Get movie list from API
     * @param url
     * @param page
     */
    private _getMovies ( url, page ) {
        this._moviesService.getMovies( url, page )
            .subscribe( response => {
                    if ( response.results.length ) {
                        for ( let i = 0; i < response.results.length; i++ ) {
                            const genres = response.results[ i ].genre_ids.reduce( ( result, genreId ) => {
                                const item = this._genreService.genres[ GeneralType.MOVIE ]
                                    .find( ( g: Genre ) => +g.id === +genreId );
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
    }

}
