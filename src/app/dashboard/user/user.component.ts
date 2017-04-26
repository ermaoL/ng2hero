import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from '../../services/user.service';

@Component({
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [UserService]
})
export class UserComponent implements OnInit {

  heroes;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUserByPage(1);
  }

  getUserByPage(page){
    this.userService.getAllUser(page).subscribe(heroes => {
      this.heroes = heroes
    })
  }

  pageChange(index){
    this.getUserByPage(index);
  }

}
