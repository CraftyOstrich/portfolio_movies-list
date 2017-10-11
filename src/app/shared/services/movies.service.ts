import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {API_CONFIG} from '../../app-config';

@Injectable()
export class MoviesService {
  constructor(private _http: Http) {
  }

  /**
   * Get content
   * @param link
   * @param page
   * @returns {Observable<R|T>}
   */
  public getContent(link, page): Observable<any> {
  return this._http.get(this._getRequestPageUrl(link, page))
    .map((response: Response) => response.json())
    .catch(this._handleError);
}

  /**
   * Get movies list
   * @param link
   * @param page
   * @returns {Observable<R|T>}
   */
  public getMovies(link, page): Observable<any> {
    return this._http.get(this._getRequestPageUrl(link, page))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  /**
   * Get movie
   * @param link
   * @param id
   * @returns {Observable<R|T>}
   */
  public getMovie(link, id): Observable<any> {
    return this._http.get(this._getRequestUrl(link, id))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  /**
   * Get similar movies list
   * @param link
   * @param id
   * @param url
   * @returns {Observable<R|T>}
   */
  public getSimilarMovies(link, id, url) {
    return this._http.get(this._getRequestUrl(link, id, url))
      .map((response: Response) => response.json())
      .catch(this._handleError);
    }

  /**
   * Get movie's videos
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
   * Get people of movie
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
   * Get keywords
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
    return Observable.throw(error.json().error || 'Server error');
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
