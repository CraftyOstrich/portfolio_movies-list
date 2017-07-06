import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {API_CONFIG} from "../../app-config";

@Injectable()
export class SearchService {

  constructor(private _http: Http) { }

  getFilterContent(link, page, sort): Observable<any> {
    return this._http.get(this.getSortByUrl(link, page, sort))
      .map((response: Response) => response.json())
      //.do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getGenres(link): Observable<any> {
    return this._http.get(this.getRequestUrl(link))
      .map((response: Response) => response.json())
      //.do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  getKeywords(link, keyword): Observable<any> {
    return this._http.get(this.getRequestSearchUrl(link,keyword))
      .map((response: Response) => response.json())
      //.do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getSearchList(link, searchWord): Observable<any> {
    return this._http.get(this.getRequestSearchUrl(link,searchWord))
      .map((response: Response) => response.json())
      //.do(data => console.log('All:' + JSON.stringify(data)))
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

  private getSortByUrl(link: string, page: number, sort: string) {
    if (sort) {
      return API_CONFIG.Url + link + API_CONFIG.Key + API_CONFIG.Page + page + sort
    }
  }

  private getRequestSearchUrl(link: string, keyword: string) {
    if (link && keyword) {
      return API_CONFIG.Url + link + API_CONFIG.Key + API_CONFIG.Query+ keyword + API_CONFIG.Page
    }
  }

}
