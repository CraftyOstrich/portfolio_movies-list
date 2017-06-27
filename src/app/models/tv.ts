import {Genre} from "./genre";
export interface ISeries {
  original_name: string;
  id: number;
  name: string;
  vote_count: number;
  vote_average: number;
  poster_path: string;
  first_air_date: string;
  popularity: number;
  genre_ids: Genre[];
  original_language: string;
  backdrop_path: string;
  overview: string;
  origin_country: string[];
}

export  class Series implements ISeries {
  public original_name: string;
  public id: number;
  public name: string;
  public vote_count: number;
  public vote_average: number;
  public poster_path: string;
  public first_air_date: string;
  public popularity: number;
  public genre_ids: Genre[];
  public original_language: string;
  public backdrop_path: string;
  public overview: string;
  public origin_country: string[];

  constructor (series: Series) {
    this.original_name = series.original_name;
    this.id = series.id;
    this.name = series.name;
    this.vote_count = series.vote_count;
    this.vote_average  = series.vote_average;
    this.poster_path = series.poster_path;
    this.first_air_date = series.first_air_date;
    this.popularity = series.popularity;
    this.genre_ids = series.genre_ids;
    this.original_language = series.original_language;
    this.backdrop_path = series.backdrop_path;
    this.overview = series.overview;
    this.origin_country = series.origin_country;
  }
}
