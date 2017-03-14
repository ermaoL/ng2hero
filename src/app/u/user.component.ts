import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'user',
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {
    constructor(private _userService: UserService, private _authService: AuthService) { }

    user;
    ngOnInit() {
        this._userService.getMe()
        .then(user => {
            this.user = user;
        }).catch(err =>{
            console.log(err);
        });
    }

    logout(){
      this._authService.logout();
    }
}