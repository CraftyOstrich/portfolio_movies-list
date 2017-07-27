import { Movie } from './movie';
import { Tv } from './tv';

export interface IPerson {
  popularity: number;
  id: number;
  profile_path: string;
  name: string;
  media_type: string;
  known_for: (Movie | Tv)[];
}

export class Person implements IPerson {
  public popularity: number;
  public id: number;
  public profile_path: string;
  public name: string;
  public media_type: string;
  public known_for: (Movie | Tv)[];

  constructor(person: Person) {
    this.popularity = person.popularity;
    this.id = person.id;
    this.profile_path = person.profile_path;
    this.name = person.name;
    this.media_type = person.media_type;
    this.known_for = person.known_for;
  }
}
