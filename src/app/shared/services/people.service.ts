import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {API_CONFIG} from "../../app-config";
import {Observable} from "rxjs";

@Injectable()
export class PeopleService {
  constructor (private _http: Http) {}

  getPeople(link): Observable<any> {
    return this._http.get(this.getRequestUrl(link))
      .map((response: Response) => response.json())
      //.do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getPerson(link, id): Observable<any> {
    return this._http.get(this.getRequestUrl(link, id))
      .map((response: Response) => response.json())
      //.do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getMovieWorks(link, id, path): Observable<any> {
    return this._http.get(this.getRequestUrl(link, id, path))
      .map((response: Response) => response.json())
      //.do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  //
  // getSerialWorks(link, id, path): Observable<any> {
  //   return this._http.get(this.getRequestUrl(link, id, path))
  //     .map((response: Response) => response.json())
  //     .do(data => console.log('All:' + JSON.stringify(data)))
  //     .catch(this.handleError);
  // }

  getAllWorks(link, id, path): Observable<any> {
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
