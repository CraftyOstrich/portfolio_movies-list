import { Component } from '@angular/core';
import { LoginService } from '../../services';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent {
  /**
   * Error message
   * @type {string}
   * @private
   */
  private _errorMessage = '';

  constructor(private _loginService: LoginService,
              private _router: Router) {
  }

  /**
   * Sign in
   * @param form
   */
  public signIn(form: FormGroup) {
    if (!form.invalid) {
      const userCredentials = {email: form.value.email, password: form.value.password};
      this._loginService
        .signIn(userCredentials)
        .subscribe(
          (success) => {
            if (success) {
              this._router.navigateByUrl('/overview/movies');
            }
          },
          (error) => {
            this._errorMessage = error;
          }
        );
    } else {
      alert('This form is invalid!');
    }
  }
}
