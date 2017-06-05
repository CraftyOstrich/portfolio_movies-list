import {Injectable} from "@angular/core";
import {IMovie} from "../movies-detail/movie";
import {Http, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class MoviesService {
  private _moviesUrl = "assets/api/movies.json";

  movies: any[] = [];

  constructor(private _http: Http) {}

  getMovies(): Observable<IMovie[]> {
    return this._http.get(this._moviesUrl)
      .map((response: Response) => {
          this.movies = <IMovie[]>response.json();
        return this.movies
      })
      .do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getMovie(id): Observable<any> {
    const foundMovie = this.findMovie(id);
    if (foundMovie) {
      return Observable.of(foundMovie);
    }

    return this.getMovies()
      .map(() => {
        return this.findMovie(id);
      })
  }

  findMovie(id):IMovie {
    return this.movies.find((movie: IMovie) => movie.id === id);
  }

  private handleError( error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
