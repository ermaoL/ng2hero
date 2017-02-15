import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { TokenService } from '../auth/token.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    username: string;
    password: string;
    loginurl: string = 'http://localhost:3000/login';

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
}