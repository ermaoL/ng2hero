import {Component, OnInit} from '@angular/core';
import {StarService} from '../services/star.service';
@Component({
  selector: 'star',
  templateUrl: 'star.component.html',
  styleUrls: ['star.component.scss'],
  providers: [StarService]
})
export class StarComponent implements OnInit {
  constructor(private _starService: StarService) {
  }

  stars = [];
  ngOnInit() {
    this._starService.getMyStars().then(res => {
      this.stars = res.stars;
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

}
