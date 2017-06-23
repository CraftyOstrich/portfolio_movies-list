import {Component, OnInit} from '@angular/core';
import {PersonDetail} from "../../models/person-detail";
import {ActivatedRoute, Router} from "@angular/router";
import {PeopleService} from "../../shared/services/people.service";


@Component({
  selector: 'app-person-detail',
  templateUrl: 'person-detail.component.html',
  styleUrls: ['person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  person: PersonDetail;
  // movieWorks: WorkMovie[];
  // serialWorks: WorkSerial[];
  // allWorks: WorkAll[];
  // popularWorks: WorkAll[];
  link: string = "/person/";
  linkAllWorks: string = "/combined_credits";

  constructor(private _route: ActivatedRoute,
              private _peopleService: PeopleService,
              private router: Router) { }

  ngOnInit() {
    let id = +this._route.snapshot.params['id'];
    this._peopleService.getPerson(this.link , id)
      // .mergeMap(
      //   (person: IPersonDetail) => {
      //     this.person = new PersonDetail(person);
      //     return this._peopleService.getAllWorks(this.link , id, this.linkAllWorks)
      //   }
      // )
      .subscribe((person: PersonDetail) => {
        this.person = person;
      });

    // this._peopleService.getMovieWorks(this.link , id, this.linkMovieWorks).subscribe((response) => {
    //   this.movieWorks = response.cast || [];
    //   console.log(this.movieWorks);
    // });
    // this._peopleService.getSerialWorks(this.link , id, this.linkSerialWorks).subscribe((response) => {
    //   this.serialWorks = response.cast || [];;
    //   console.log(this.serialWorks.length)
    // });
    // this._peopleService.getAllWorks(this.link , id, this.linkAllWorks)
    //   .subscribe((response: any) => {
    //   this.person.setCast(response);
    //   // this.allWorks = response.cast || [];
    //   // this.popularWorks = response.cast.slice(0, 8);
    // })
  }

  DetermineGender (gender: number) {
    if (gender) {
      return gender === 1 ? 'female' : 'male';
    } else {
      return '-';
    }
  }



  goTo(id, title?) {
    if (title) {
      this.router.navigate(['movie', id]);
    } else {
      this.router.navigate(['tv', id]);
    }

  }
}
