import { Injectable } from '@angular/core';
import { Token } from './token.model';

import { Observable, BehaviorSubject } from 'rxjs';
@Injectable()
export class TokenService {
    private _token: BehaviorSubject<Token>;
    constructor() { 
        this._token = <BehaviorSubject<Token>>new BehaviorSubject(new Token(localStorage.getItem('auth_token')));
    }

    getToken(): Token{
        return this._token.getValue();
    }

    getTokenStream(): Observable<Token> {
        return this._token.asObservable();
    }

    setToken(token: string){
        this._token.next(new Token(token));
        localStorage.setItem('auth_token', token);
    }

    removeToken(){
        this._token.next(null);
        localStorage.removeItem('auth_token');
    }
}