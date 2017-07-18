export interface IUser {
  login: string;
  email: string;
  password: string;
}

export class User implements IUser {

  constructor(public login, public email, public password) {
  }

}
