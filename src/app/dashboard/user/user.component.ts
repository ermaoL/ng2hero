import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from '../../services/user.service';

@Component({
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [UserService]
})
export class UserComponent implements OnInit {

  heroes: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAllUser().then(heroes => {
      this.heroes = heroes
    })
      .catch((err) => {
      });
  }

}
