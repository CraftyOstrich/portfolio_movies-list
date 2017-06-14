export interface ICompany {
  id: number;
  name: string
}

export class Company implements ICompany {
  public id: number;
  public name: string;

  constructor(company: ICompany) {
    this.id = company.id;
    this.name = company.name;
  }
}

