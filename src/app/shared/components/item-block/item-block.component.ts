import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-block',
  templateUrl: './item-block.component.html',
  styleUrls: ['./item-block.component.scss']
})
export class ItemBlockComponent implements OnInit {
  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
