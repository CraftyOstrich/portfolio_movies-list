import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../../app-config';
import { Observable } from 'rxjs/Observable';
import { ErrorService } from './error.service';

@Injectable()
export class PeopleService {

  constructor(private _http: Http,
              private _errService: ErrorService) {
  }

  /**
   * Get people list
   * @param link
   * @param page
   * @returns {Observable<R|T>}
   */
  public getPeople(link, page): Observable<any> {
    return this._http.get(this._getRequestPageUrl(link, page))
      .map((response: Response) => response.json())
      .catch(this._errService.handleError);
  }

  /**
   * Get person
   * @param link
   * @param id
   * @returns {Observable<R|T>}
   */
  public getPerson(link, id): Observable<any> {
    return this._http.get(this._getRequestUrl(link, id))
      .map((response: Response) => response.json())
      .catch(this._errService.handleError);
  }

  /**
   * Get all person's work
   * @param link
   * @param id
   * @param url
   * @returns {Observable<R|T>}
   */
  public getAllWorks(link, id, url): Observable<any> {
    return this._http.get(this._getRequestUrl(link, id, url))
      .map((response: Response) => response.json())
      .catch(this._errService.handleError);
  }


  /**
   * Get request url
   * @param link
   * @param page
   * @returns {string}
   * @private
   */
  private _getRequestPageUrl(link: string, page: number) {
    if (link && page) {
      return API_CONFIG.URL + link + API_CONFIG.KEY + API_CONFIG.PAGE + page;
    }
  }

  private _getRequestUrl(link: string, id: number, url?: string) {
    if (id && url) {
      return API_CONFIG.URL + link + id + url + API_CONFIG.KEY;
    } else if (id) {
      return API_CONFIG.URL + link + id + API_CONFIG.KEY;
    } else {
      return API_CONFIG.URL + link + API_CONFIG.KEY;
    }
  }
}
