import {Component, OnInit} from '@angular/core';
import {PersonDetail} from '../../models/person-detail';
import {ActivatedRoute, Params} from '@angular/router';
import {PeopleService} from '../../shared/services/people.service';
import { API_CONFIG } from '../../app-config';


@Component({
  selector: 'app-person-detail',
  templateUrl: 'person-detail.component.html',
  styleUrls: ['person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  person: PersonDetail;
  personGender = '';

  private _currentLink = '/person/';

  constructor(private _route: ActivatedRoute,
              private _peopleService: PeopleService) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      const id = +params['id'];
      this._peopleService.getPerson(this._currentLink , id)
        .mergeMap(
          (person: any) => {
            this.person = new PersonDetail(person);
            this.personGender = this._determineGender(this.person.gender);
            return this._peopleService.getAllWorks(this._currentLink , id, API_CONFIG.PERSON_WORKS);
          }
        )
        .subscribe((response: any) => {
          this.person.setPersonJobs(response);
        });
    });
  }

  private _determineGender (gender: number) {
    if (gender) {
      return gender === 1 ? 'female' : 'male';
    } else {
      return '-';
    }
  }

}
