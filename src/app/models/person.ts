import {Movie} from "./movie";
export interface IPerson {
  popularity: number;
  id: number;
  profile_path: string;
  name: string;
  known_for: Movie[];
}

export class Person implements IPerson {
  public popularity: number;
  public id: number;
  public profile_path: string;
  public name: string;
  public known_for: Movie[];

  constructor (person: Person) {
    this.popularity = person.popularity;
    this.id = person.id;
    this.profile_path = person.profile_path;
    this.name = person.name;
    this.known_for = person.known_for;
  }
}
