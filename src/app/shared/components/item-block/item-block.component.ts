import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-item-block',
  templateUrl: './item-block.component.html',
  styleUrls: ['./item-block.component.scss']
})
export class ItemBlockComponent implements OnInit {
  @Input() item: any;
  itemYear: string;

  constructor(private _router: Router) {
  }

  ngOnInit() {
    if (this.item.release_date) {
      this.itemYear = this.item.release_date.slice(0, 4);
    } else if (this.item.first_air_date) {
      this.itemYear = this.item.first_air_date.slice(0, 4);
    } else {
      this.itemYear = '';
    }
  }

  goTo(id: number, title: string) {
    if (title) {
      this._router.navigate(['movie/detail', id]);
    } else {
      this._router.navigate(['tv/detail', id]);
    }
  }

}
