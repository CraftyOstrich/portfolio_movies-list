import { Component, OnInit } from '@angular/core';
import { TvsService } from '../../shared/services/tvs.service';
import { Tv } from '../../models/tv';
import { API_CONFIG } from '../../app-config';
import { ActivatedRoute, Params } from '@angular/router';
import { GeneralType } from '../../shared/constants/generalData';
import { Genre } from '../../models/genre';
import { GenresService } from '../../shared/services/genres.service';

@Component( {
    selector: 'app-tvs',
    templateUrl: './tvs.component.html',
    styleUrls: [ './tvs.component.scss' ]
} )
export class TvsComponent implements OnInit {
    /**
     * List of tvs
     * @type {Tv[]}
     */
    public tvs: Tv[];
    /**
     * Number of page results
     * @type {number}
     */
    public pagesNumber: number;
    /**
     * Current page (default = 1)
     * @type {number}
     */
    public currentPage = 1;
    /**
     * Current page url
     * @type {string}
     * @private
     */
    private _currentUrl: string = API_CONFIG.TVS_POPULAR;
    /**
     * Error message
     */
    private _errorMessage: string;

    constructor ( private _genreService: GenresService, private _tvsService: TvsService,
                  private  _route: ActivatedRoute ) {
    }

    ngOnInit () {
        this._route.params.subscribe( ( params: Params ) => {
                this.currentPage = 1;
                if ( params.type ) {
                    this._currentUrl = '/tv/' + params.type;
                }
                this.tvs = [];
                this.getTvs( this._currentUrl, this.currentPage );
            },
            error => this._errorMessage = <any>error
        );
    }

    /**
     * Omn change page
     * @param currentPage
     */
    public onPageChange ( currentPage: number ) {
        if ( this.currentPage !== currentPage ) {
            this.currentPage = currentPage;
            this.getTvs( this._currentUrl, this.currentPage );
        }
    }

    /**
     * Get tvs list
     * @param url
     * @param page
     */
    private getTvs ( url, page ) {
        this._tvsService.getContent( url, page )
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
                            let movie = new Tv( response.results[ i ], genres );
                            this.tvs.push( movie )
                        }
                        this.pagesNumber = response.total_pages;
                    }
                },
                error => this._errorMessage = <any>error );
    }
}
