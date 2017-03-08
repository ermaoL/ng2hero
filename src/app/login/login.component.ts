import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { TokenService } from '../auth';
import { loginUrl, signUrl } from '../services/api';
@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    username: string;
    username1: string;
    password: string;
    password1: string;
    loginurl: string = loginUrl;
    signurl: string = signUrl;

    constructor(private _http: Http, private _tokenService: TokenService, private _router: Router) { }

    ngOnInit() { }


    login(){
        this._http.post(this.loginurl, {username: this.username, password: this.password})
        .toPromise().then((res) => {
            if(res.json().success){
                this._tokenService.setToken(res.json().token);
                this._router.navigate(['dashboard']);
            }
        })
    }

    signup(){
        this._http.post(this.signurl, {username: this.username1, password: this.password1})
        .toPromise().then((res) => {
            if(res.json().success){
                this._tokenService.setToken(res.json().token);
                this._router.navigate(['dashboard']);
            }
        })
    }
}
