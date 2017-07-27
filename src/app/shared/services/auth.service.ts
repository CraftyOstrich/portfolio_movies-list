import { Injectable } from '@angular/core';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  private _signedUser: User;

  constructor(private _router: Router) {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      const signedUser = new User(parsedUser.login, parsedUser.email, parsedUser.password);
      this.authUser(signedUser);
    }
  }

  get isLoggedIn(): boolean {
    return !!this._signedUser;
  }

  authUser(user: User) {
    if (user) {
      this._signedUser = user;
      localStorage.setItem('user', JSON.stringify(this._signedUser));
    }
  }

  logOut() {
    this._signedUser = null;
    this._router.navigateByUrl('/discover/movie');
    localStorage.clear();
  }
}
