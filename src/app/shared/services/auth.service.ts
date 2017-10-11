import { Injectable } from '@angular/core';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  /**
   * Sign in user
   */
  private _signedUser: User;

  constructor(private _router: Router) {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      const signedUser = new User(parsedUser.login, parsedUser.email, parsedUser.password);
      this.authUser(signedUser);
    }
  }

  /**
   * Is user sign in
   * @returns {boolean}
   */
  get isLoggedIn(): boolean {
    return !!this._signedUser;
  }

  /**
   * Authorization user
   * @param user
   */
  public authUser(user: User) {
    if (user) {
      this._signedUser = user;
      localStorage.setItem('user', JSON.stringify(this._signedUser));
    }
  }

  /**
   * Log out user
   */
  public logOut() {
    this._signedUser = null;
    this._router.navigateByUrl('/discover/movie');
    localStorage.clear();
  }
}
