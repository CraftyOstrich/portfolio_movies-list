import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/services/movies.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MovieDetail } from '../../models/movie-detail';
import { Genre } from '../../models/genre';
import { Movie } from '../../models/movie';
import { Video } from '../../models/video';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Character } from '../../models/character';
import { Creator } from '../../models/creator';
import { Keyword } from '../../models/keyword';
import { API_CONFIG } from '../../app-config';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  /**
   * Current movie
   * @type {MovieDetail}
   */
  public movie: MovieDetail;
  /**
   * Similiar movie's list to current movie
   * @type {Array}
   */
  public moviesSimilar: Movie[] = [];
  /**
   * Videos list of current movie
   * @type {Array}
   */
  public movieVideos: Video[] = [];
  /**
   * People were filmed in this movie
   * @type {Array}
   */
  public movieCharacters: Character[] = [];
  /**
   * People, who took part in this movie creation
   * @type {Array}
   */
  public movieCreators: Creator[] = [];
  /**
   * Movie's keywords
   * @type {Array}
   */
  public movieKeywords: Keyword[] = [];
  /**
   * Genres of current movie
   * @type {Genre[]}
   */
  public genres: Genre[];
  /**
   * Part of path to movie details page
   * @type {string}
   * @private
   */
  private _currentLink = '/movie/';
  private _errorMessage: string;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _moviesService: MoviesService,
              private _sanitizer: DomSanitizer) {
  }

  /**
   * On page init
   * Get info about movie from API
   * (genres, keywords, characters, creators, similar movies, videos)
   */
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
        const id = +params['id'];
        this._moviesService.getMovie(this._currentLink, id).subscribe((movie: MovieDetail) => {
          this.movie = movie;
          this.genres = movie.genres;
        });
        this._moviesService.getKeywords(this._currentLink, id, API_CONFIG.URL_KEYWORDS).subscribe((response) => {
          this.movieKeywords = response.keywords || [];
        });
        this._moviesService.getPeople(this._currentLink, id, API_CONFIG.URL_PEOPLE).subscribe((response) => {
          this.movieCharacters = response.cast.slice(0, 5) || [];
          this.movieCreators = response.crew.slice(0, 5) || [];
        });
        this._moviesService.getSimilarMovies(this._currentLink, id, API_CONFIG.URL_SIMILAR).subscribe((response) => {
          this.moviesSimilar = response.results || [];
        });
        this._moviesService.getVideos(this._currentLink, id, API_CONFIG.URL_VIDEO).subscribe((response) => {
          this.movieVideos = response.results.slice(0, 1) || [];
        });
      },
      error => this._errorMessage = <any>error);
  }

  /**
   * Navigate to person that filmed in this movie
   * @param id
   */
  public goToActor(id: number) {
    this._router.navigate(['person', id]);
  }

  /**
   * Navigate to similar movie
   * @param id
   */
  public goToSimilar(id: number) {
    this._router.navigate(['movie/detail', id]);
  }

  /**
   * Sage getting video from third-party resource
   * @param url
   * @returns {SafeResourceUrl}
   */
  public sanitizeUrl(url: string): SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + url);
  }
}
