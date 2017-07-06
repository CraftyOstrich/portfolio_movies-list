import { Component, OnInit } from '@angular/core';
import {IMovie, Movie} from "../../models/movie";
import {MoviesService} from "../../shared/services/movies.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  videos: Movie[];
  pagesNumber: number;
  currentPage: number = 1;
  link: string = '/movie/popular';
  private currentUrl: string = '';
  private errorMessage: string;

  constructor(public _moviesService: MoviesService) { }

  ngOnInit() {
    this.currentUrl = window.location.href.slice(21);
    if (this.currentUrl === '/movie') {
      this.currentUrl = this.link;
    }
    this.currentPage = 1;
    this.getMovies(this.currentUrl, this.currentPage)
  }

  onPageChange(currentPage: number) {
    if (this.currentPage !== currentPage) {
      this.currentPage = currentPage;
      this.getMovies(this.currentUrl, this.currentPage)
    }
  }

  private getMovies(url, page) {
    this._moviesService.getMovies(url, page)
      .subscribe(response => {
          this.videos = response.results || [];
          this.pagesNumber = response.total_pages;
          console.log(this.pagesNumber)
        },
        error => this.errorMessage = <any>error);
  }

}
