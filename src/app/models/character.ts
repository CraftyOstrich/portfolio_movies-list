export interface ICharacter {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: string;
}

export class Character implements ICharacter {
  public cast_id: number;
  public character: string;
  public credit_id: string;
  public gender: number;
  public id: number;
  public name: string;
  public order: number;
  public profile_path: string;

  constructor (character: ICharacter) {
    this.cast_id = character.cast_id;
    this.character = character.character;
    this.credit_id = character.credit_id;
    this.gender = character.gender;
    this.id = character.id;
    this.name = character.name;
    this.order = character.order;
    this.profile_path = character.profile_path;
  }
}
