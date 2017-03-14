import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { TokenService } from './token.service';
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _tokenService: TokenService, private _router: Router) { }

    canActivate(){
        let token = this._tokenService.getToken();
        if(token && token.token) {
            if(token.isExpired()){
                this._router.navigate(['login']);
            }
            let user = this._tokenService.getToken().decodeToken().user;
            console.log(user);
            console.log(!token.isExpired() && user.admin);
            return !token.isExpired() && user.admin;
        }

        this._router.navigate(['login']);

        return false;
    }
}
