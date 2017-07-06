import {Component, OnInit, DoCheck} from '@angular/core';
import {MoviesService} from "../../shared/services/movies.service";
import {ActivatedRoute} from "@angular/router";
import {IMovieDetail, MovieDetail} from "../../models/movie-detail";
import {IGenre, Genre} from "../../models/genre";
import {Movie} from "../../models/movie";
import {Video} from "../../models/video";
import {SafeUrl, DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {Character} from "../../models/character";
import {Creator} from "../../models/creator";
import {Keyword} from "../../models/keyword";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: MovieDetail;
  moviesSimilar: Movie[] = [];
  movieVideos: Video[] = [];
  movieCharacters: Character[] = [];
  movieCreators: Creator[] = [];
  movieKeywords: Keyword[]= [];
  link: string = '/movie/';
  linkSimilar: string = '/similar';
  linkVideo: string = '/videos';
  linkPeople: string = '/credits';
  linkKeywords: string = '/keywords';
  genres: Genre[];

  constructor(private _route: ActivatedRoute, private _moviesService: MoviesService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    let id = +this._route.snapshot.params['id'];
    this._moviesService.getMovie(this.link, id).subscribe((movie: IMovieDetail) => {
      this.movie = movie;
      this.genres = movie.genres;
    });
    this._moviesService.getKeywords(this.link, id, this.linkKeywords).subscribe((response) => {
      this.movieKeywords = response.keywords || [];
    });
    this._moviesService.getPeople(this.link, id, this.linkPeople).subscribe((response) => {
      this.movieCharacters = response.cast.slice(0, 5) || [];
      this.movieCreators = response.crew.slice(0, 5) || [];
    });
    this._moviesService.getSimilarMovies(this.link, id, this.linkSimilar).subscribe((response) => {
      this.moviesSimilar = response.results || [];
    });
    this._moviesService.getVideos(this.link, id, this.linkVideo).subscribe((response) => {
      this.movieVideos = response.results.slice(0, 3) || [];
    });



  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + url);
  }


}
