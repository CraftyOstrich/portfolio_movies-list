import {Injectable} from "@angular/core";
import {IMovie} from "../movies-detail/movie";
import {Http, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {API_CONFIG} from "../app-config";




@Injectable()
export class MoviesService {
  //private _moviesUrl = "assets/api/movies.json";
  constructor(private _http: Http) {}

  getMovies(route): Observable<any>  {
    return this._http.get(this.getRequestUrl(route))
      .map((response: Response) =>  response.json())
      .do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }



  getMovie(route, id): Observable<any> {
    return this._http.get(this.getRequestUrl(route, id))
      .map((response: Response) =>  response.json())
      .catch(this.handleError);
  }

  private handleError( error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  private getRequestUrl(link: string, id?: number) {
    if (id) {
      return API_CONFIG.Url + link + id + API_CONFIG.Key
    } else
    return API_CONFIG.Url + link + API_CONFIG.Key
  }

}
