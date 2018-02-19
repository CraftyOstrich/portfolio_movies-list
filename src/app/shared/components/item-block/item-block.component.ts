import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-item-block',
  templateUrl: './item-block.component.html',
  styleUrls: [ './item-block.component.scss' ]
} )
export class ItemBlockComponent {
  /**
   * Item (movie or tv)
   */
  @Input() public item: any;

  constructor ( private _router: Router ) {
  }

  /**
   * Navigate to movie or tv
   * @param id
   * @param title
   */
  public goTo ( id: number, title: string ) {
    if ( title ) {
      this._router.navigate( [ 'movie/detail', id ] );
    } else {
      this._router.navigate( [ 'tv/detail', id ] );
    }
  }

}
