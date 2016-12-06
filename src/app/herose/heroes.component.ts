import {Component, OnInit} from "@angular/core";
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {

  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: "windstorm"
  };
  selectedHero: Hero;
  heroes: Hero[];


  constructor(private router: Router,
              private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero) {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
