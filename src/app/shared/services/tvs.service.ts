import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../../app-config';
import { Observable } from 'rxjs/rx';

@Injectable()
export class TvsService {
  constructor(private _http: Http) {
  }

  /**
   * Get tvs list
   * @param link
   * @param page
   * @returns {Observable<R|T>}
   */
  public getSerials(link, page): Observable<any> {
    return this._http.get(this._getRequestPageUrl(link, page))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  /**
   * Get tv
   * @param route
   * @param id
   * @returns {Observable<R|T>}
   */
  public getSerial(route, id): Observable<any> {
    return this._http.get(this._getRequestUrl(route, id))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  /**
   * Get similat tv's list
   * @param link
   * @param id
   * @param url
   * @returns {Observable<R|T>}
   */
  public getSimilarSerials(link, id, url) {
    return this._http.get(this._getRequestUrl(link, id, url))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  /**
   * Get tv's list
   * @param link
   * @param id
   * @param url
   * @returns {Observable<R|T>}
   */
  public getVideos(link, id, url) {
    return this._http.get(this._getRequestUrl(link, id, url))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  /**
   * Get people of tv
   * @param link
   * @param id
   * @param url
   * @returns {Observable<R|T>}
   */
  public getPeople(link, id, url) {
    return this._http.get(this._getRequestUrl(link, id, url))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  /**
   * Get tv's keywords
   * @param link
   * @param id
   * @param url
   * @returns {Observable<R|T>}
   */
  public getKeywords(link, id, url) {
    return this._http.get(this._getRequestUrl(link, id, url))
      .map((response: Response) => response.json())
      .catch(this._handleError);
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
