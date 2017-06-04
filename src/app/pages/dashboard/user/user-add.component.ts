import {Component, OnInit} from '@angular/core';
import { Location} from '@angular/common';
import {Router} from '@angular/router';
import {TokenService, AuthHttp} from '../../../modules/auth';
import {signUrl} from '../../../services/api';

@Component({
  selector: 'user-add',
  templateUrl: 'user-add.component.html'
})
export class UserAddComponent implements OnInit {
  constructor(private _http: AuthHttp, private _tokenService: TokenService, private _router: Router, private _location: Location) {
  }

  ngOnInit() {
  }

  username: string;
  password: string;
  signurl: string = signUrl;

  add() {
    this._http.post(this.signurl, {username: this.username, password: this.password})
      .toPromise().then((res) => {
      console.log(res.json());
      if (res.json().success) {
        this._location.back();
      } else {
        alert(res.json().message);
      }
    }).catch((err) => {
      console.log(err);
    })
  }
}
