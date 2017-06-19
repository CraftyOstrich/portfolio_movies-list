export interface IKeyword {
  id: number;
  name: string;
}

export class Keyword implements IKeyword {
  public id: number;
  public name: string;

  constructor (keyword: Keyword) {
    this.id = keyword.id;
    this.name = keyword.name;
  }
}
