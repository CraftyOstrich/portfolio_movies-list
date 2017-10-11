import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../shared/services/people.service';
import { Person } from '../../models/person';
import { API_CONFIG } from '../../app-config';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  /**
   * List of people
   * @type {Person[]}
   */
  public people: Person[];
  /**
   * Total number of result pages
   * @type {number}
   */
  public pagesNumber: number;
  /**
   * Current page
   * @type {number}
   */
  public currentPage = 1;
  /**
   * Error message
   */
  private _errorMessage: string;

  constructor(private _peopleService: PeopleService) {
  }

  /**
   * On init
   * Get popular people list
   */
  ngOnInit() {
    this._getPeople(API_CONFIG.PEOPLE_POPULAR, this.currentPage);
  }

  /**
   * Get current page and people list when page changed
   * @param currentPage
   */
  public onPageChange(currentPage: number) {
    if (this.currentPage !== currentPage) {
      this.currentPage = currentPage;
      this._getPeople(API_CONFIG.PEOPLE_POPULAR, this.currentPage);
    }
  }

  /**
   * Get people list and total number result pages
   * @param link
   * @param page
   * @private
   */
  private _getPeople(link: string, page: number) {
    this._peopleService.getPeople(link, page)
      .subscribe(response => {
          this.people = response.results || [];
          this.pagesNumber = response.total_pages;
        },
         error => this._errorMessage = <any>error);
  }
}
