import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'sider',
    styleUrls: ['sider.component.scss'],
    templateUrl: 'sider.component.html',
    providers: [ AuthService ]
})
export class SiderComponent implements OnInit {
    constructor(private _authService: AuthService) { }

    loginUser: Object = null;
    ngOnInit() {
      if(this._authService.loggedIn()) {
        this.loginUser = this._authService.getUserInfo().user || {};
      }
    }

    logout(){
      this._authService.logout();
    }

}
