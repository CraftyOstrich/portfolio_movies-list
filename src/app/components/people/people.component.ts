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
  people: Person[];
  pagesNumber: number;
  currentPage = 1;
  private _errorMessage: string;

  constructor(private _peopleService: PeopleService) {
  }

  ngOnInit() {
    this.getPeople(API_CONFIG.PEOPLE_POPULAR, this.currentPage);
  }

  onPageChange(currentPage: number) {
    if (this.currentPage !== currentPage) {
      this.currentPage = currentPage;
      this.getPeople(API_CONFIG.PEOPLE_POPULAR, this.currentPage);
    }
  }

  private getPeople(link: string, page: number) {
    this._peopleService.getPeople(link, page)
      .subscribe(response => {
          this.people = response.results || [];
          this.pagesNumber = response.total_pages;
        },
        error => this._errorMessage = <any>error);
  }
}
