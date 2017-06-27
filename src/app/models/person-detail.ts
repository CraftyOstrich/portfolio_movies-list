import {MovieCast, TvCast} from "./cast";
import {MovieCrew, TvCrew} from "./crew";

export interface IPersonDetail{
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string;
  gender: number;
  homepage: string;
  id: number;
  imdb_id: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}

export class PersonJobs {
  cast: (MovieCast | TvCast)[];
  crew: (MovieCrew | TvCrew)[];
  constructor(response: any) {
    try {
      this.cast = response.cast.map((item: any) => {
        if (item.media_type === 'movie') {
          return new MovieCast(item);
        } else if (item.media_type === 'tv') {
          return new TvCast(item)
        }
        return null;
      });
      this.crew = response.crew.map((item: any) => {
        if (item.media_type === 'movie') {
          return new MovieCrew(item);
        } else if (item.media_type === 'tv') {
          return new TvCrew(item)
        }
        return null;
      });
    } catch (err) {
      throw err;
    }
  }


  getCastByType(mediaType: string): (MovieCast | TvCast)[] {
    if (!mediaType && !this.cast) {
      return [];
    }
    return this.cast.filter((item: MovieCast | TvCast) => item.media_type === mediaType);
  }

  getCrewByType(mediaType: string): (MovieCrew | TvCrew)[] {
    if (!mediaType && !this.crew) {
      return [];
    }
    return this.crew.filter((item: MovieCrew | TvCrew) => item.media_type === mediaType);
  }
}

export class PersonDetail implements IPersonDetail {
  public adult: boolean;
  public also_known_as: string[];
  public biography: string;
  public birthday: string;
  public deathday: string;
  public gender: number;
  public homepage: string;
  public id: number;
  public imdb_id: string;
  public name: string;
  public place_of_birth: string;
  public popularity: number;
  public profile_path: string;
  public jobs: PersonJobs;



  constructor (person: IPersonDetail) {
    this.adult = person.adult;
    this.also_known_as = person.also_known_as;
    this.biography = person.biography;
    this.birthday = person.birthday;
    this.deathday = person.deathday;
    this.gender = person.gender;
    this.homepage = person.homepage;
    this.id = person.id;
    this.imdb_id = person.imdb_id;
    this.name = person.name;
    this.place_of_birth = person.place_of_birth;
    this.popularity = person.popularity;
    this.profile_path = person.profile_path;
  }

  setPersonJobs(response: any) {
    this.jobs = new PersonJobs(response);
  }

}
