import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../../../models/person';

@Component({
  selector: 'app-person-block',
  templateUrl: 'person-block.component.html',
  styleUrls: ['person-block.component.scss']
})
export class PersonBlockComponent {
  /**
   * Person
   */
  @Input() public person: Person;

  constructor(private _router: Router) {
  }

  /**
   * Navigate to person profile
   * @param id
   */
  public onSelect(id) {
    this._router.navigate(['/person', id]);
  }

}
