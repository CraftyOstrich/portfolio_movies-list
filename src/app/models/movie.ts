export class Movie {
    public id: number;
    public title: string;
    public poster_path: string;
    public backdrop_path: string;
    public release_date: string;
    public release_year: string;
    public vote_average: number;
    public genre_ids: number[];
    public genres: string[];
    public overview: string;
    public vote_count: number;
    public popularity: number;
    public video: boolean;
    public adult: boolean;
    public original_language: string;
    public original_title: string;
    public media_type?: string;

    constructor ( movie: Movie, genres: string[] ) {
        this.id = movie.id;
        this.title = movie.title;
        this.poster_path = movie.poster_path;
        this.backdrop_path = movie.backdrop_path;
        this.release_date = movie.release_date;
        this.release_year = movie.release_date ? movie.release_date.slice( 0, 4 ) : '';
        this.vote_average = movie.vote_average;
        this.genre_ids = movie.genre_ids;
        this.genres = genres;
        this.overview = movie.overview;
        this.vote_count = movie.vote_count;
        this.popularity = movie.popularity;
        this.video = movie.video;
        this.adult = movie.adult;
        this.original_language = movie.original_language;
        this.original_title = movie.original_title;
        this.media_type = movie.media_type;
    }
}


