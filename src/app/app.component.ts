import {Component, OnInit, DoCheck} from "@angular/core";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  template: `
    <banner [loggedIn]="loggedIn" [user]="user"></banner>
    <router-outlet></router-outlet>
    <loading></loading>
  `,
  styleUrls: ['./app.component.scss'],
  providers: [AuthService],
})
export class AppComponent implements OnInit, DoCheck {
  ngDoCheck(): void {
    this.loggedIn = this._authService.loggedIn();
    if(this.loggedIn) {
      this.user = this._authService.getUserInfo().user;
    }else{
      this.user = {};
    }
  }

  constructor(private _authService: AuthService) {
  }

  loggedIn: boolean = false;
  user;
  ngOnInit() {
    this.loggedIn = this._authService.loggedIn();

    if(this.loggedIn) {
      this.user = this._authService.getUserInfo().user;
    }else{
      this.user = {};
    }
  }

}
