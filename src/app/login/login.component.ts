import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    username: string;
    password: string;
    loginurl: string = 'http://localhost:3000/api/login';

    constructor(private _http: Http) { }

    ngOnInit() { }


    login(){
        this._http.post(this.loginurl, {username: this.username, password: this.password})
        .toPromise().then((res) => {
            console.log(res.json());
        })
        console.log(this.username, this.password)
    }
}