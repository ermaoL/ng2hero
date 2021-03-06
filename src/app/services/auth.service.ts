import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { TokenService } from '../modules/auth';

@Injectable()
export class AuthService {

    constructor(private _tokenService: TokenService, private _router: Router) { }

    logout(){
        this._tokenService.removeToken();
        this._router.navigate(['login']);
    }

    getUserInfo(){
        return this._tokenService.getToken().decodeToken();
    }

    loggedIn(){
        let token = this._tokenService.getToken();

        if(token && token.token) {
            return !token.isExpired();
        }

        return false;
    }
}
