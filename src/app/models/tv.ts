import {Genre} from "./genre";
export interface ITv {
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
  media_type?: string;
}

export  class Tv implements ITv {
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
  public media_type: string;

  constructor (tv: Tv) {
    this.original_name = tv.original_name;
    this.id = tv.id;
    this.name = tv.name;
    this.vote_count = tv.vote_count;
    this.vote_average  = tv.vote_average;
    this.poster_path = tv.poster_path;
    this.first_air_date = tv.first_air_date;
    this.popularity = tv.popularity;
    this.genre_ids = tv.genre_ids;
    this.original_language = tv.original_language;
    this.backdrop_path = tv.backdrop_path;
    this.overview = tv.overview;
    this.origin_country = tv.origin_country;
    this.media_type = tv.media_type;
  }
}
