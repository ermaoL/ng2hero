import {Injectable} from '@angular/core';
import {User} from "../models/User";
import 'rxjs/add/operator/toPromise';

import { AuthHttp } from '../auth';
import { usersUrl, meUrl } from './api';
@Injectable()
export class UserService {

  private usersUrl = usersUrl;
  private meUrl = meUrl;
  constructor(private http: AuthHttp) {
  }

  getAllUser(page): any {
    return this.http.get(this.usersUrl + '?page=' + page)
      .map(response => {
        return response.json().users
      })
  }

  getMe(): Promise<User>{
    return this.http.get(this.meUrl)
      .toPromise()
      .then(response => {
        return response.json().user as User;
      }).catch((err) => {

      })
  }

  changePassword(obj): Promise<any>{
    return this.http.put(this.usersUrl + '/password', obj).toPromise()
      .then(response=>{
        return response.json();
      }).catch(err=>{
        console.log(err);
      })
  }
}
