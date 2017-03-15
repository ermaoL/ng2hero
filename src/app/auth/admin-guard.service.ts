import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { TokenService } from './token.service';
@Injectable()
export class AdminGuard implements CanActivate{

  constructor(private _tokenService: TokenService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let token = this._tokenService.getToken();

    if(token && token.token) {
      let user = this._tokenService.getToken().decodeToken().user;
      console.log(user.admin);
      if(!user.admin) {
        alert("你不是管理员");
        this._router.navigate(['article']);
      }
      return user.admin;
    }
    alert("你不是管理员");
    this._router.navigate(['article']);
    return false;
  }

}
