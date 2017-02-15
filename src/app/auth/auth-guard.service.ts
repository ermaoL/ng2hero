import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { TokenService } from './token.service';
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _tokenService: TokenService, private _router: Router) { }

    canActivate(){
        let token = this._tokenService.getToken();
        if(token && token.token) {
            console.log(token.isExpired());
            if(token.isExpired()){
                this._router.navigate(['login']);
            }
            return !token.isExpired();
        }

        this._router.navigate(['login']);
        
        return false;
    }
}