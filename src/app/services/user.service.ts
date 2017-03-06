import {Injectable} from '@angular/core';
import {User} from "../models/User";
import 'rxjs/add/operator/toPromise';

import { AuthHttp } from '../auth';
import { usersUrl } from './api';
@Injectable()
export class UserService {

  private heroesUrl = usersUrl;

  constructor(private http: AuthHttp) {
  }

  getAllUser(): Promise<User[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => {
        return response.json().users as User[]})
      .catch((err)=>{
      });
  }
}
