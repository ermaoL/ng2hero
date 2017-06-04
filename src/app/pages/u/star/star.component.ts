import {Component, OnInit} from '@angular/core';
import {StarService} from '../../../services/star.service';
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
    this.getMyStar();
  }

  addStar(title, url){
    this._starService.addStar(title, url).then(res=>{
      if(res.success) {
        this.getMyStar();
      }
    }).catch(err=>{
      console.log(err);
    })
  }

  getMyStar(){
    this._starService.getMyStars().then(res => {
      this.stars = res.stars;
    }).catch(err => {
      console.log(err);
    })
  }

  urlClick(id, i){
    console.log(id, i);
    this._starService.patchVisits(id).then(res=>{
      this.stars[i] = res.star;
    }).catch(err=>{
      console.log(err);
    })
  }
}
