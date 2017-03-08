import {Component, OnInit} from "@angular/core";
import {AuthService} from "./services/auth.service";
import {UserService} from "./core/user.service";


@Component({
  selector: 'app-root',
  template: `
    <banner></banner>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
  providers: [AuthService],
})
export class AppComponent implements OnInit {

  constructor(private _authService: AuthService, private  _user: UserService) {
  }

  loggedIn: boolean = false;
  username: string;

  ngOnInit() {
    this.loggedIn = this._authService.loggedIn();
    this.username = this._user.userName;
  }

}
