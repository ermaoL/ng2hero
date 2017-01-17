import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {User} from "./models/User";
import {Observable} from "rxjs";
import 'rxjs/add/operator/toPromise';

import { AuthHttp } from './auth/auth.http';

@Injectable()
export class UserService {

  private heroesUrl = 'http://localhost:3000/api/users';

  constructor(private http: AuthHttp) {
  }

  getAllUser(): Promise<User[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => {
        console.log(response.json())
        return response.json().users as User[]})
      .catch((err)=>{
          console.log(err.json());
      });
  }
}
