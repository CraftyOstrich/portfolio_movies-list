import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs";
import { User } from "../../models/user";
import { AuthService } from "./auth.service";

@Injectable()
export class LoginService {
  private _userUrl = "assets/api/users.json";
  private _users: User[] = [];
  private _errorMessage: string;

  constructor(private _http: Http, private _authService: AuthService) {
    this.getUsers()
      .subscribe(users => this._users = users,
        error => this._errorMessage = <any>error);
  }

  getUsers(): Observable<any> {
    return this._http.get(this._userUrl)
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  signIn(userCredentials: { email: string, password: string }): Observable<any> {
    const found = this._users.find((us: User) => us.email === userCredentials.email);
    if (found) {
      if (found.password === userCredentials.password) {
        const signedUser = new User(found.login, found.email, found.password);
        this._authService.authUser(signedUser);
        return Observable.of(true);
      } else {
        return Observable.throw('Wrong password!')
      }
    } else {
      return Observable.throw("User isn't found!");
    }
  }

  signOut() {
    this._authService.logOut();
  }

  private _handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
