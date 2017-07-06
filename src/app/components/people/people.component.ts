import {Component, OnInit} from '@angular/core';
import {PeopleService} from "../../shared/services/people.service";
import {Person} from "../../models/person";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people: Person[];
  pagesNumber: number;
  currentPage: number = 1;
  private currentUrl: string = '/person/popular';
  private errorMessage: string;

  constructor(public _peopleService: PeopleService) {
  }

  ngOnInit() {
   this.getPeople(this.currentUrl, this.currentPage)
  }

  onPageChange(currentPage: number) {
    if (this.currentPage !== currentPage) {
      this.currentPage = currentPage;
      this.getPeople(this.currentUrl, this.currentPage)
    }
  }

  private getPeople(url, page) {
    this._peopleService.getPeople(url, page)
      .subscribe(response => {
          this.people = response.results || [];
          this.pagesNumber = response.total_pages;
        },
        error => this.errorMessage = <any>error);
  }
}
