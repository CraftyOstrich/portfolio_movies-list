import { Component, OnInit } from '@angular/core';
import { Movie } from "../../models/movie";
import { MoviesService } from "../../shared/services/movies.service";
import { ActivatedRoute, Params } from '@angular/router';
import { API_CONFIG } from '../../app-config';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  videos: Movie[];
  pagesNumber: number;
  currentPage: number = 1;

  private _currentUrl: string = API_CONFIG.MOVIES_POPULAR;
  private _errorMessage: string;

  constructor(private _moviesService: MoviesService,
              private  _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
        this.currentPage = 1;
        if (params.type) {
          this._currentUrl = '/movie/' + params.type;
        }
        this.getMovies(this._currentUrl, this.currentPage)
      },
      error => this._errorMessage = <any>error
    );
  }

  onPageChange(currentPage: number) {
    if (this.currentPage !== currentPage) {
      this.currentPage = currentPage;
      this.getMovies(this._currentUrl, this.currentPage)
    }
  }

  private getMovies(url, page) {
    this._moviesService.getMovies(url, page)
      .subscribe(response => {
          this.videos = response.results || [];
          this.pagesNumber = response.total_pages;
        },
        error => this._errorMessage = <any>error);
  }

}
