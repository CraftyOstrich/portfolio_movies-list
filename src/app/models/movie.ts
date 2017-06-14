export interface IMovie {
  id: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  title: string;
  popularity: number;
  poster_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
}
export class Movie implements IMovie {
  public id: number;
  public title: string;
  public poster_path: string;
  public backdrop_path: string;
  public release_date: string;
  public vote_average: number;
  public genre_ids: number[];
  public overview: string;
  public vote_count: number;
  public popularity: number;
  public video: boolean;
  public adult: boolean;
  public original_language: string;
  public original_title: string;

  constructor(movie: IMovie) {
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
    this.original_title = movie.original_title
  }
}
