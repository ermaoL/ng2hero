import {Component, OnInit, Input} from "@angular/core";
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import "rxjs/add/operator/switchMap";

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  @Input()
  hero: Hero;
  ngOnInit():void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero=>this.hero = hero);
  }

  goBack():void{
    this.location.back();
  }

}
