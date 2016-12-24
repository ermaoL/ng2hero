import { Component, OnInit } from '@angular/core';
import { User } from "../User";
import { HeroService } from "../hero.service";
import { HeroSearchService } from "../hero-search.service";
import { UserService } from '../user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  providers: [UserService]
})
export class DashboardComponent implements OnInit {

  heroes: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUser().
      then(heroes => {
        console.log(heroes);
        this.heroes = heroes.slice(0, 5)});
  }

}
