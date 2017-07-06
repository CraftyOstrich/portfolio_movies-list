import { Component, OnInit } from '@angular/core';
import {SerialsService} from "../../shared/services/serials.service";
import {Tv} from "../../models/tv";

@Component({
  selector: 'app-serials',
  templateUrl: './serials.component.html',
  styleUrls: ['./serials.component.scss']
})
export class SerialsComponent implements OnInit {
  serials: Tv[];
  pagesNumber: number;
  currentPage: number = 1;
  link: string = '/tv/popular';
  private currentUrl: string = '';
  private errorMessage: string;

  constructor(public _serialsService: SerialsService) { }

  ngOnInit() {
    this.currentUrl = window.location.href.slice(21);
    if (this.currentUrl === '/serials') {
      this.currentUrl = this.link;
    }
    this.currentPage = 1;
    this.getSerials(this.currentUrl, this.currentPage)
  }

  onPageChange(currentPage: number) {
    if (this.currentPage !== currentPage) {
      this.currentPage = currentPage;
      this.getSerials(this.currentUrl, this.currentPage)
    }
  }

  private getSerials(url, page) {
    this._serialsService.getSerials(url, page)
      .subscribe(response => {
          this.serials = response.results || [];
          this.pagesNumber = response.total_pages
        },
        error => this.errorMessage = <any>error);
  }
}
