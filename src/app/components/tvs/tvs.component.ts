import { Component, OnInit } from '@angular/core';
import { TvsService } from '../../shared/services/tvs.service';
import { Tv } from '../../models/tv';
import { API_CONFIG } from '../../app-config';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.scss']
})
export class TvsComponent implements OnInit {
  /**
   * List of tvs
   * @type {Tv[]}
   */
  public tvs: Tv[];
  /**
   * Number of page results
   * @type {number}
   */
  public pagesNumber: number;
  /**
   * Current page (default = 1)
   * @type {number}
   */
  public currentPage = 1;
  /**
   * Current page url
   * @type {string}
   * @private
   */
  private _currentUrl: string = API_CONFIG.TVS_POPULAR;
  /**
   * Error message
   */
  private _errorMessage: string;

  constructor(private _tvsService: TvsService,
              private  _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
        this.currentPage = 1;
        if (params.type) {
          this._currentUrl = '/tv/' + params.type;
        }
        this.getTvs(this._currentUrl, this.currentPage);
      },
      error => this._errorMessage = <any>error
    );
  }

  /**
   * Omn change page
   * @param currentPage
   */
  public onPageChange(currentPage: number) {
    if (this.currentPage !== currentPage) {
      this.currentPage = currentPage;
      this.getTvs(this._currentUrl, this.currentPage);
    }
  }

  /**
   * Get tvs list
   * @param url
   * @param page
   */
  private getTvs(url, page) {
    this._tvsService.getSerials(url, page)
      .subscribe(response => {
          this.tvs = response.results || [];
          this.pagesNumber = response.total_pages;
        },
        error => this._errorMessage = <any>error);
  }
}
