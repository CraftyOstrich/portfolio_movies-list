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

  getContent(link, page): Observable<any> {
  return this._http.get(this._getRequestPageUrl(link, page))
    .map((response: Response) => response.json())
    .catch(this._handleError);
}

  getMovies(link, page): Observable<any> {
    return this._http.get(this._getRequestPageUrl(link, page))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  getMovie(link, id): Observable<any> {
    return this._http.get(this._getRequestUrl(link, id))
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  getSimilarMovies(link, id, url) {
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
