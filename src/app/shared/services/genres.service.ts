/**
 * Created by svitlanamishchuk on 1/16/18.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Genre } from '../../models/genre';
import { API_CONFIG } from '../../app-config';
import { GeneralType } from '../constants/generalData';

@Injectable()
export class GenresService {
    /**
     * Genres object
     * @type {{}}
     * @private
     */
    private _genres = {};

    public get genres () {
        return this._genres;
    }

    constructor ( private _http: Http ) {
        this.getGenres( GeneralType.MOVIE );
        this.getGenres( GeneralType.TV );
    }

    /**
     * Get genres by type
     * @param type
     * @returns {Subscription}
     */
    public getGenres ( type: string ) {
        this._genres[ type ] = [];
        return this._http.get( this._getApiByType( type ) )
            .map( ( response: Response ) => response.json() ).subscribe( ( response ) => {
                if ( response.genres.length ) {
                    for ( let i = 0; i < response.genres.length; i++ ) {
                        let genre = new Genre( response.genres[ i ] );
                        this._genres[ type ].push( genre );
                    }
                }
            } )
    }

    /**
     * Create API URL
     * @param type
     * @returns {string}
     * @private
     */
    private _getApiByType ( type: string ) {
        let genresApi = '';
        if ( type === GeneralType.MOVIE ) {
            genresApi = API_CONFIG.URL + API_CONFIG.MOVIES_GENRES + API_CONFIG.KEY;
        } else if ( type === GeneralType.TV ) {
            genresApi = API_CONFIG.URL + API_CONFIG.TVS_GENRES + API_CONFIG.KEY;
        }
        return genresApi;
    }
}