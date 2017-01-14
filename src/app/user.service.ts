import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {User} from "./models/User";
import {Observable} from "rxjs";
import 'rxjs/add/operator/toPromise';
@Injectable()
export class UserService {

  private heroesUrl = 'http://localhost:3000/api/users';

  constructor(private http: Http) {
  }

  getAllUser(): Promise<User[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().users as User[])
  }
}
