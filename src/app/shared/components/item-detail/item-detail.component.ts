import {Component, OnInit, Input} from '@angular/core';
import {IMovieDetail} from "../../../models/movie-detail";


@Component({
  selector: 'app-item-detail',
  templateUrl: 'item-detail.component.html',
  styleUrls: ['item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: IMovieDetail;
  link: string = '/movie/';


  constructor() {
  }

   ngOnInit ():void {
   }



}
