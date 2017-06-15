import {Component, OnInit, DoCheck} from '@angular/core';
import {MoviesService} from "../../shared/services/movies.service";
import {ActivatedRoute} from "@angular/router";
import {IMovieDetail} from "../../models/movie-detail";
import {IGenre} from "../../models/genre";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: IMovieDetail;
  link: string = '/movie/';
  genres: IGenre[];

  constructor(private _route: ActivatedRoute, private _moviesService: MoviesService) { }

  ngOnInit() {
    let id = +this._route.snapshot.params['id'];
    this._moviesService.getMovie(this.link, id).subscribe((movie: IMovieDetail) => {
      this.movie = movie;
      this.genres = movie.genres;
    });
    // console.log(this.movie.genres);
  }

}
