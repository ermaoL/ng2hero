import {Component, OnInit, DoCheck} from "@angular/core";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  template: `
    <banner [loggedIn]="loggedIn" [isAdmin]="isAdmin"></banner>
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
      this.isAdmin = this._authService.getUserInfo().admin;
      console.log(this.isAdmin);
    }else{
      this.isAdmin = false;
    }
  }

  constructor(private _authService: AuthService) {
  }

  loggedIn: boolean = false;
  isAdmin: boolean = false;
  ngOnInit() {
    this.loggedIn = this._authService.loggedIn();

    if(this.loggedIn) {
      this.isAdmin = this._authService.getUserInfo().admin;
    }else{
      this.isAdmin = false;
    }
  }

}
