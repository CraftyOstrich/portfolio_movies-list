import { Component, Input } from '@angular/core';
import { Creator } from "../../../models/creator";
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: 'item-detail.component.html',
  styleUrls: ['item-detail.component.scss']
})
export class ItemDetailComponent {
  @Input() item: any;
  @Input() creators: Creator[];

  constructor(private _router: Router) {
  }

  getYear(item: any) {
    if (item.release_date) {
      return item.release_date.slice(0, 4);
    } else if (item.first_air_date) {
      return item.first_air_date.slice(0, 4);
    } else {
      return '';
    }
  }

  goToPerson(id: number) {
    this._router.navigate(['person', id]);
  }
}
