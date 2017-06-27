import { Component, OnInit } from '@angular/core';
import {SerialsService} from "../../shared/services/serials.service";
import {Series} from "../../models/tv";

@Component({
  selector: 'app-serials',
  templateUrl: './serials.component.html',
  styleUrls: ['./serials.component.scss']
})
export class SerialsComponent implements OnInit {
  errorMessage: string;
  serials: Series[];
  link: string = '/tv/popular';

  constructor(public _serialsService: SerialsService) { }

  ngOnInit() {
    let href = window.location.href.slice(21);
    if (href === '/serials') {
      href = this.link;
    }
    this._serialsService.getSerials(href)
      .subscribe(response => this.serials = response.results || [],
        error => this.errorMessage = <any>error);

  }

}
