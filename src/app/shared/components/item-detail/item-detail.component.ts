import {Component, OnInit, Input} from '@angular/core';
import {IMovieDetail} from "../../../models/movie-detail";
import {Creator} from "../../../models/creator";


@Component({
  selector: 'app-item-detail',
  templateUrl: 'item-detail.component.html',
  styleUrls: ['item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: IMovieDetail;
  @Input() creators: Creator[];
  link: string = '/movie/';


  constructor() {
  }

   ngOnInit ():void {
   }



}
