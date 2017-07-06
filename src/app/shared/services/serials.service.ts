import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {API_CONFIG} from "../../app-config";
import {Observable} from "rxjs";

@Injectable()
export class SerialsService {
  constructor (private _http: Http) {
  }

  getSerials(link, page): Observable<any> {
    return this._http.get(this.getRequestPageUrl(link, page))
      .map((response: Response) => response.json())
      //.do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getSerial (route, id): Observable<any> {
    return this._http.get(this.getRequestUrl(route, id))
      .map((response: Response) => response.json())
      //.do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getSimilarSerials(link, id, path) {
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
      //.do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  getRequestPageUrl(link: string, page: number) {
    if (link && page) {
      return API_CONFIG.Url + link + API_CONFIG.Key + API_CONFIG.Page + page;
    }
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
