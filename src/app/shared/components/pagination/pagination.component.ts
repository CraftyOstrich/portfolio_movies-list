import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  /**
   * Total number of pages
   */
  @Input() public pagesNumber: number;
  /**
   * Current page
   */
  @Input() public currentPage: number;
  /**
   * On page was changed
   * @type {EventEmitter}
   */
  @Output() public onPageChange: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  /**
   * Change page
   * @param pageNumber
   */
  public goTo(pageNumber) {
    if (pageNumber > 1000) {
      pageNumber = 1000;
    }
    if (pageNumber < 1) {
      pageNumber = 1;
    }
    this.currentPage = pageNumber;
    this.onPageChange.emit(this.currentPage);
  }

}
