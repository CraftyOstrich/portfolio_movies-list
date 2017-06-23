import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Person} from "../../../models/person";

@Component({
  selector: 'app-person-block',
  templateUrl: 'person-block.component.html',
  styleUrls: ['person-block.component.scss']
})
export class PersonBlockComponent implements OnInit {
  @Input() person: Person;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(id) {
    this.router.navigate(['/person', id]);
  }

}
