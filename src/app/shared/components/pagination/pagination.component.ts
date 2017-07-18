import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() pagesNumber: number;
  @Input() currentPage: number;
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  goTo(pageNumber) {
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
