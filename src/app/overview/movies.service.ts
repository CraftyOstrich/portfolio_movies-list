import {Injectable} from "@angular/core";
import {IMovie} from "../movies-detail/movie";
import {Http, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class MoviesService {
  private _moviesUrl = "assets/api/movies.json";

  constructor(private _http: Http) {}

  getMovies(): Observable<IMovie[]> {
    return this._http.get(this._moviesUrl)
      .map((response: Response) => <IMovie[]>response.json())
      .do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError( error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
