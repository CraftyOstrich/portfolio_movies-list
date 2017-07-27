import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../../app-config';
import { Observable } from 'rxjs/rx';

@Injectable()
export class TvsService {
  constructor(private _http: Http) {
  }

  getSerials(link, page): Observable<any> {
    return this._http.get(this._getRequestPageUrl(link, page))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  getSerial(route, id): Observable<any> {
    return this._http.get(this._getRequestUrl(route, id))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  getSimilarSerials(link, id, url) {
    return this._http.get(this._getRequestUrl(link, id, url))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  getVideos(link, id, url) {
    return this._http.get(this._getRequestUrl(link, id, url))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  getPeople(link, id, url) {
    return this._http.get(this._getRequestUrl(link, id, url))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  getKeywords(link, id, url) {
    return this._http.get(this._getRequestUrl(link, id, url))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

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
