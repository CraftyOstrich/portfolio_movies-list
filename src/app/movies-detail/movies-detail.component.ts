import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IMovie} from "./movie";
import {MoviesService} from "../overview/movies.service";


@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss']
})
export class MoviesDetailComponent implements OnInit {
  movie: IMovie;
  link: string = '/movie/';


  constructor(private _route: ActivatedRoute, private _moviesService: MoviesService) {

  }

   ngOnInit ():void {
     let id = +this._route.snapshot.params['id'];
     this._moviesService.getMovie(this.link, id).subscribe((movie: IMovie) => this.movie = movie);
   }


}
