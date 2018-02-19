/**
 * Created by svitlanamishchuk on 11/5/17.
 */
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ErrorService {
    constructor() {}

    /**
     * Catch error
     * @param error
     * @returns {any}
     * @private
     */
    public handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}