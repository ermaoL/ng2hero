import {Component, OnInit} from "@angular/core";
import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  template: `
  <sider>
  </sider>
  <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.scss'],
  providers: [AuthService]
})
export class AppComponent implements OnInit{
    
    constructor(private _authService: AuthService){}
    
    loggedIn: boolean = false;
    ngOnInit(){
        this.loggedIn = this._authService.loggedIn();
    }
}
