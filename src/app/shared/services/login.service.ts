import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/rx';
import { User } from '../../models/user';
import { AuthService } from './auth.service';

@Injectable()
export class LoginService {
  /**
   * Url of signed user
   * @type {string}
   * @private
   */
  private _userUrl = 'assets/api/users.json';
  /**
   * Users list
   * @type {Array}
   * @private
   */
  private _users: User[] = [];
  /**
   * Error message
   */
  private _errorMessage: string;

  constructor(private _http: Http, private _authService: AuthService) {
    this.getUsers()
      .subscribe(users => this._users = users,
        error => this._errorMessage = <any>error);
  }

  /**
   * Get signed user list
   * @returns {Observable<R|T>}
   */
  public getUsers(): Observable<any> {
    return this._http.get(this._userUrl)
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  /**
   * Sign in
   * @param userCredentials
   * @returns {any}
   */
  public signIn(userCredentials: { email: string, password: string }): Observable<any> {
    const found = this._users.find((us: User) => us.email === userCredentials.email);
    if (found) {
      if (found.password === userCredentials.password) {
        const signedUser = new User(found.login, found.email, found.password);
        this._authService.authUser(signedUser);
        return Observable.of(true);
      } else {
        return Observable.throw('Wrong password!');
      }
    } else {
      return Observable.throw(`User isn't found!`);
    }
  }

  /**
   * Sign out
   */
  public signOut() {
    this._authService.logOut();
  }

  /**
   * Catch error
   * @param error
   * @returns {any}
   * @private
   */
  private _handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
