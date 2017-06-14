export interface ISeason {
  air_date: string;
  episode_count: number;
  id: number;
  poster_path: string;
  season_number: number;
}

export class Season implements ISeason {
  public air_date: string;
  public episode_count: number;
  public id: number;
  public poster_path: string;
  public season_number: number;

  constructor (season: Season) {
    this.air_date = season.air_date;
    this.episode_count = season.episode_count;
    this.id = season.id;
    this.poster_path = season.poster_path;
    this.season_number = season.season_number;
  }
}
