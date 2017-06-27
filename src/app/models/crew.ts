export abstract class Crew {
  credit_id: string;
  department: string;
  id: number;
  job: string;
  poster_path: string;
  media_type: string;
}

export class MovieCrew extends Crew {
  public adult: boolean;
  public original_title: string;
  public release_date?: string;
  public title: string;
  public year: number;


  constructor (movie: MovieCrew) {
    super();
    this.department = movie.department;
    this.credit_id = movie.credit_id;
    this.id = movie.id;
    this.poster_path = movie.poster_path;
    this.job = movie.job;
    this.adult = movie.adult;
    this.original_title = movie.original_title;
    this.release_date = movie.release_date;
    this.title = movie.title;
    this.media_type = movie.media_type;
    this.year = (movie.release_date) ? +movie.release_date.slice(0, 4): null;
  }
}

export class TvCrew extends Crew {
  public episode_count: number;
  public first_air_date : string;
  public name: string;
  public original_name: string;
  public year: number;

  constructor (tv: TvCrew) {
    super();
    this.credit_id = tv.credit_id;
    this.id = tv.id;
    this.poster_path = tv.poster_path;
    this.media_type = tv.media_type;
    this.episode_count = tv.episode_count;
    this.first_air_date = tv.first_air_date;
    this.name = tv.name;
    this.original_name = tv.original_name;
    this.department = tv.department;
    this.job = tv.job;
    this.year = (tv.first_air_date) ? +tv.first_air_date.slice(0, 4) : null;
  }
}
