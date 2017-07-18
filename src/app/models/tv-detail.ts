import {Creator} from "./creator";
import {Genre} from "./genre";
import {Company} from "./production-companie";
import {Season} from "./season";
import {Network} from "./network";

export interface ITvDetail {
  backdrop_path: string;
  created_by: Creator[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  name: string;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Company[];
  seasons: Season[];
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export class TvDetail implements ITvDetail {
  public backdrop_path: string;
  public created_by: Creator[];
  public episode_run_time: number[];
  public first_air_date: string;
  public genres: Genre[];
  public homepage: string;
  public id: number;
  public in_production: boolean;
  public languages: string[];
  public last_air_date: string;
  public name: string;
  public networks: Network[];
  public number_of_episodes: number;
  public number_of_seasons: number;
  public origin_country: string[];
  public original_language: string;
  public original_name: string;
  public overview: string;
  public popularity: number;
  public poster_path: string;
  public production_companies: Company[];
  public seasons: Season[];
  public status: string;
  public type: string;
  public vote_average: number;
  public vote_count: number;

  constructor (tv: TvDetail) {
    this.backdrop_path = tv.backdrop_path;
    this.created_by = tv.created_by;
    this.episode_run_time = tv.episode_run_time;
    this.first_air_date = tv.first_air_date;
    this.genres = tv.genres;
    this.homepage = tv.homepage;
    this.id = tv.id;
    this.in_production = tv.in_production;
    this.languages = tv.languages;
    this.last_air_date = tv.last_air_date;
    this.name = tv.name;
    this.networks = tv.networks;
    this.number_of_episodes = tv.number_of_episodes;
    this.number_of_seasons = tv.number_of_seasons;
    this.origin_country = tv.origin_country;
    this.original_language = tv.original_language;
    this.original_name = tv.original_name;
    this.overview = tv.overview;
    this.popularity = tv.popularity;
    this.poster_path = tv.poster_path;
    this.production_companies = tv.production_companies;
    this.seasons = tv.seasons;
    this.status = tv.status;
    this.type = tv.type;
    this.vote_average = tv.vote_average;
    this.vote_count = tv.vote_count;
  }
}
