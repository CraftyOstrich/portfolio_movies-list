export abstract class Cast {
  character: string;
  credit_id: string;
  id: number;
  poster_path?: string;
  media_type: string;
}

export class MovieCast extends Cast {
  public adult: boolean;
  public original_title: string;
  public release_date?: string;
  public title: string;
  public year: number;

  constructor(movie: MovieCast) {
    super();
    this.character = movie.character;
    this.credit_id = movie.credit_id;
    this.id = movie.id;
    this.poster_path = movie.poster_path;
    this.media_type = movie.media_type;
    this.adult = movie.adult;
    this.original_title = movie.original_title;
    this.release_date = movie.release_date;
    this.title = movie.title;
    this.year = (movie.release_date) ? +movie.release_date.slice(0, 4) : null;
  }
}

export class TvCast extends Cast {
  public episode_count: number;
  public first_air_date: string;
  public name: string;
  public original_name: string;
  public year: number;

  constructor(tv: TvCast) {
    super();
    this.character = tv.character;
    this.credit_id = tv.credit_id;
    this.id = tv.id;
    this.poster_path = tv.poster_path;
    this.media_type = tv.media_type;
    this.episode_count = tv.episode_count;
    this.first_air_date = tv.first_air_date;
    this.name = tv.name;
    this.original_name = tv.original_name;
    this.year = (tv.first_air_date) ? +tv.first_air_date.slice(0, 4) : null;
  }
}

export class AllCast extends Cast {
  public episode_count?: number;
  public first_air_date?: string;
  public name?: string;
  public original_name?: string;
  public adult?: boolean;
  public original_title?: string;
  public release_date?: string;
  public title?: string;

  constructor(work: AllCast) {
    super();
    this.character = work.character;
    this.credit_id = work.credit_id;
    this.id = work.id;
    this.poster_path = work.poster_path;
    this.media_type = work.media_type;
    this.episode_count = work.episode_count;
    this.first_air_date = work.first_air_date;
    this.name = work.name;
    this.original_name = work.original_name;
    this.adult = work.adult;
    this.original_title = work.original_title;
    this.release_date = work.release_date;
    this.title = work.title;
  }
}
