import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_CONFIG } from '../../app-config';

@Injectable()
export class SearchService {

  constructor(private _http: Http) {
  }

  /**
   * Get filtered content
   * @param link
   * @param page
   * @param sort
   * @returns {Observable<R|T>}
   */
  public getFilterContent(link, page, sort): Observable<any> {
    return this._http.get(this._getSortByUrl(link, page, sort))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  /**
   * Get genres list
   * @param link
   * @returns {Observable<R|T>}
   */
  public getGenres(link): Observable<any> {
    return this._http.get(this._getRequestUrl(link))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  /**
   * Get keywords list
   * @param link
   * @param keyword
   * @returns {Observable<R|T>}
   */
  public getKeywords(link, keyword): Observable<any> {
    return this._http.get(this._getRequestSearchUrl(link, keyword))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  /**
   * Get search list
   * @param link
   * @param searchWord
   * @returns {Observable<R|T>}
   */
  public getSearchList(link, searchWord): Observable<any> {
    return this._http.get(this._getRequestSearchUrl(link, searchWord))
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
   * @returns {string}
   * @private
   */
  private _getRequestUrl(link: string) {
    return API_CONFIG.URL + link + API_CONFIG.KEY;
  }

  /**
   * Get sort by url
   * @param link
   * @param page
   * @param sort
   * @returns {string}
   * @private
   */
  private _getSortByUrl(link: string, page: number, sort: string) {
    if (sort) {
      return API_CONFIG.URL + link + API_CONFIG.KEY + API_CONFIG.PAGE + page + sort;
    }
  }

  private _getRequestSearchUrl(link: string, keyword: string) {
    if (link && keyword) {
      return API_CONFIG.URL + link + API_CONFIG.KEY + API_CONFIG.QUERY + keyword + API_CONFIG.FIRST_PAGE;
    }
  }

}
