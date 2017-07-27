export interface ILanguage {
  iso_639_1: string;
  name: string;
}
export class Language implements ILanguage {
  public iso_639_1: string;
  public name: string;

  constructor (language: Language) {
    this.iso_639_1 = language.iso_639_1;
    this.name = language.name;
  }
}
