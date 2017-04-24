import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, DoCheck {


  @Input() page: number;
  @Input() pages: number;
  @Output() pageChange = new EventEmitter();
  showPages;
  prev;
  next;

  constructor() {

  }

  getShowPages(page, total) {
    const pages = [];
    this.prev = {
      page: 1,
      text: '上一页',
      clz: page === 1 ? 'disabled' : ''
    };
    for (let i = 0; i < total; i++) {
      pages.push({
        page: i + 1,
        text: i + 1,
        clz: page === i + 1 ? 'active' : ''
      });
    }
    this.next = {
      page: total,
      text: '下一页',
      clz: page === total ? 'disabled' : ''
    };
    return pages;
  }

  ngOnInit() {
    this.showPages = this.getShowPages(this.page, this.pages);
  }

  ngDoCheck(): void {
    this.showPages = this.getShowPages(this.page, this.pages);
  }

  prevClick() {
    if (this.page > 1) {
      this.pageChange.emit( this.page - 1);
    }
  }

  nextClick() {
    if (this.page < this.pages) {
      this.pageChange.emit( this.page + 1);
    }
  }

  pageClick(index) {
    if (index !== this.page) {
      this.pageChange.emit(index);
    }
  }
}
