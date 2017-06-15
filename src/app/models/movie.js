"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Movie = (function () {
    function Movie(movie) {
        this.id = movie.id;
        this.title = movie.title;
        this.poster_path = movie.poster_path;
        this.backdrop_path = movie.backdrop_path;
        this.release_date = movie.release_date;
        this.vote_average = movie.vote_average;
        this.genre_ids = movie.genre_ids;
        this.overview = movie.overview;
        this.vote_count = movie.vote_count;
        this.popularity = movie.popularity;
        this.video = movie.video;
        this.adult = movie.adult;
        this.original_language = movie.original_language;
        this.original_title = movie.original_title;
    }
    return Movie;
}());
exports.Movie = Movie;
