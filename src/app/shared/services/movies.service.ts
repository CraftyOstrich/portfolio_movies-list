import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {API_CONFIG} from "../../app-config";
import {Genre} from "../../models/genre";

@Injectable()
export class MoviesService {
  constructor(private _http: Http) {
  }

  getContent(link, sort?): Observable<any> {
  return this._http.get(this.getRequestUrl(link, sort))
    .map((response: Response) => response.json())
    //.do(data => console.log('All:' + JSON.stringify(data)))
    .catch(this.handleError);
}

  getMovies(link): Observable<any> {
    return this._http.get(this.getRequestUrl(link))
      .map((response: Response) => response.json())
      //.do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getMovie(route, id): Observable<any> {
    return this._http.get(this.getRequestUrl(route, id))
      .map((response: Response) => response.json())
      //.do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getSimilarMovies(link, id, path) {
    return this._http.get(this.getRequestUrl(link, id, path))
      .map((response: Response) => response.json())
      //.do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getVideos(link, id, path) {
    return this._http.get(this.getRequestUrl(link, id, path))
      .map((response: Response) => response.json())
      //.do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getPeople(link, id, path) {
    return this._http.get(this.getRequestUrl(link, id, path))
      .map((response: Response) => response.json())
      //.do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getKeywords(link, id, path) {
    return this._http.get(this.getRequestUrl(link, id, path))
      .map((response: Response) => response.json())
      .do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  private getRequestUrl(link: string, id?: number, path?: string) {
    if (id && path) {
      return API_CONFIG.Url + link + id + path + API_CONFIG.Key
    } else if (id) {
      return API_CONFIG.Url + link + id + API_CONFIG.Key
    } else
      return API_CONFIG.Url + link + API_CONFIG.Key
  }

}
