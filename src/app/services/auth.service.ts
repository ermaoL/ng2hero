import { Injectable } from '@angular/core';

import { TokenService } from '../auth/token.service'

@Injectable()
export class AuthService {

    constructor(private _tokenService: TokenService) { }

    logout(){
        this._tokenService.removeToken();
    }

    loggedIn(){
        let token = this._tokenService.getToken();

        if(token && token.token) {
            return !token.isExpired();
        }

        return false;
    }
}
