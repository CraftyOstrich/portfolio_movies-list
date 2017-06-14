export interface ICreator {
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  name: string;
  profile_path: string;
}

export class Creator implements ICreator {
  public credit_id: string;
  public department: string;
  public gender: number;
  public id: number;
  public job: string;
  public name: string;
  public profile_path: string;

  constructor (creator: Creator) {
    this.credit_id = creator.credit_id;
    this.department = creator.department;
    this.gender = creator.gender;
    this.id = creator.id;
    this.job = creator.job;
    this.name = creator.name;
    this.profile_path = creator.profile_path;
  }
}
