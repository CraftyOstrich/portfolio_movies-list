import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  @Input() item: any;

  constructor() { }

  ngOnInit() {

  }

}
