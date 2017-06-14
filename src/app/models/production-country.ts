export interface ICountry {
  iso_3166_1: number;
  name: string
}

export class Country implements ICountry {
  public iso_3166_1: number;
  public name: string;

  constructor(country: ICountry) {
    this.iso_3166_1 = country.iso_3166_1;
    this.name = country.name;
  }
}

