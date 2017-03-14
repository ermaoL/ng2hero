import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'banner',
  templateUrl: 'banner.component.html'
})
export class BannerComponent implements OnInit {

  @Input() loggedIn: boolean;
  @Input() user;
  constructor() {
  }

  ngOnInit() {
  }

}
