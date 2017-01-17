import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { TokenService } from './token.service';
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _tokenService: TokenService) { }

    canActivate(){
        let token = this._tokenService.getToken();
        console.log(token.isExpired());
        if(token && token.token) {
            return !token.isExpired();
        }
        return false;
    }
}