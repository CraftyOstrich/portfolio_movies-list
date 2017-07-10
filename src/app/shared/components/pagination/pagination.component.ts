import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() pagesNumber: number;
  @Input() currentPage: number;
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  goTo(pageNumber) {
    if (pageNumber > 1000) {
      pageNumber = 1000;
    }
    if (pageNumber < 1) {
      pageNumber = 1;
    }
    this.currentPage = pageNumber;
    console.log(this.currentPage);
    this.onPageChange.emit(this.currentPage);
  }

}
