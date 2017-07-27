import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_CONFIG } from '../../app-config';

@Injectable()
export class SearchService {

  constructor(private _http: Http) {
  }

  getFilterContent(link, page, sort): Observable<any> {
    return this._http.get(this._getSortByUrl(link, page, sort))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  getGenres(link): Observable<any> {
    return this._http.get(this._getRequestUrl(link))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  getKeywords(link, keyword): Observable<any> {
    return this._http.get(this._getRequestSearchUrl(link, keyword))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  getSearchList(link, searchWord): Observable<any> {
    return this._http.get(this._getRequestSearchUrl(link, searchWord))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  private _handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }

  private _getRequestUrl(link: string) {
    return API_CONFIG.URL + link + API_CONFIG.KEY;
  }

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
