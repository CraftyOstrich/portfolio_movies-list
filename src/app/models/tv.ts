import { Genre } from './genre';

export class Tv {
    public original_name: string;
    public id: number;
    public name: string;
    public vote_count: number;
    public vote_average: number;
    public poster_path: string;
    public first_air_date: string;
    public release_year: string;
    public popularity: number;
    public genre_ids: Genre[];
    public genres: string[];
    public original_language: string;
    public backdrop_path: string;
    public overview: string;
    public origin_country: string[];
    public media_type: string;

    constructor ( tv: Tv, genres: string[] ) {
        this.original_name = tv.original_name;
        this.id = tv.id;
        this.name = tv.name;
        this.vote_count = tv.vote_count;
        this.vote_average = tv.vote_average;
        this.poster_path = tv.poster_path;
        this.first_air_date = tv.first_air_date;
        this.release_year = tv.first_air_date ? tv.first_air_date.slice( 0, 4 ) : '';
        this.popularity = tv.popularity;
        this.genre_ids = tv.genre_ids;
        this.genres = genres;
        this.original_language = tv.original_language;
        this.backdrop_path = tv.backdrop_path;
        this.overview = tv.overview;
        this.origin_country = tv.origin_country;
        this.media_type = tv.media_type;
    }
}
