import { Genre } from './genre';
import { Company } from './production-companie';
import { Country } from './production-country';
import { Language } from './language';
export interface IMovieDetail {
  backdrop_path: string;
  adult: boolean;
  belongs_to_collection: {};
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Company[];
  production_countries: Country[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Language[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export class MovieDetail implements IMovieDetail {
  public backdrop_path: string;
  public adult: boolean;
  public belongs_to_collection: {};
  public budget: number;
  public genres: Genre[];
  public homepage: string;
  public id: number;
  public imdb_id: string;
  public original_language: string;
  public original_title: string;
  public overview: string;
  public popularity: number;
  public poster_path: string;
  public production_companies: Company[];
  public production_countries: Country[];
  public release_date: string;
  public revenue: number;
  public runtime: number;
  public spoken_languages: Language[];
  public status: string;
  public tagline: string;
  public title: string;
  public video: boolean;
  public vote_average: number;
  public vote_count: number;

  constructor(movie: MovieDetail) {
    this.backdrop_path = movie.backdrop_path;
    this.adult = movie.adult;
    this.belongs_to_collection = movie.belongs_to_collection;
    this.budget = movie.budget;
    this.genres = movie.genres;
    this.homepage = movie.homepage;
    this.id = movie.id;
    this.imdb_id = movie.imdb_id;
    this.original_language = movie.original_language;
    this.original_title = movie.original_title;
    this.overview = movie.overview;
    this.popularity = movie.popularity;
    this.poster_path = movie.poster_path;
    this.production_companies = movie.production_companies;
    this.production_countries = movie.production_countries;
    this.release_date = movie.release_date;
    this.revenue = movie.revenue;
    this.runtime = movie.runtime;
    this.spoken_languages = movie.spoken_languages;
    this.status = movie.status;
    this.tagline = movie.tagline;
    this.title = movie.title;
    this.video = movie.video;
    this.vote_average = movie.vote_average;
    this.vote_count = movie.vote_count;
  }
}
