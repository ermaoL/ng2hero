import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {TokenService} from './token.service';
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private _tokenService: TokenService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let token = this._tokenService.getToken();
    if (token && token.token) {
      if (token.isExpired()) {
        this._router.navigate(['login']);
      }
      //token没过期
      return !token.isExpired();
    }

    this._router.navigate(['login']);

    return false;
  }
}
