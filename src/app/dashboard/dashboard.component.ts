import { Component, OnInit } from '@angular/core';
import { User } from "../models/User";
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  providers: [UserService]
})
export class DashboardComponent implements OnInit {

  heroes: User[] = [];

  constructor(private userService: UserService) {
    console.log('--------');
  }

  ngOnInit(): void {
    this.userService.getAllUser().
      then(heroes => {
        console.log(heroes);
        this.heroes = heroes.slice(0, 10)})
        .catch((err)=>{
            console.log(err);
        });
  }

}
