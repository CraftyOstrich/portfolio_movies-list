export interface IGenre {
  id: number;
  name: string
}

export class Genre implements IGenre {
  public id: number;
  public name: string;

  constructor(genre: Genre) {
    this.id = genre.id;
    this.name = genre.name;
  }
}
