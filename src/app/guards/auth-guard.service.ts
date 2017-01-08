import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor() { }

    canActivate(){
        console.log('AuthGuard#canActivate called');
        return true;
    }
}