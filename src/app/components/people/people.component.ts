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
  errorMessage: string;

  constructor(public _peopleService: PeopleService) {
  }

  ngOnInit() {
    this._peopleService.getPeople('/person/popular')
      .subscribe(response => {
          this.people = response.results || [];
        },
        error => this.errorMessage = <any>error);
  }
}
