///<reference path="../auth/auth-http.ts"/>
import { Injectable } from '@angular/core';
import { AuthHttp } from '../auth';
import { starUrl } from './api';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StarService {

    constructor(private http: AuthHttp) { }
    private starUrl = starUrl;
    getMyStars(): Promise<any>{
      return this.http.get(this.starUrl + '/me').toPromise().then(response => {
        return response.json();
      }).catch(err=>{
        console.log(err);
      })
    }

    addStar(title, url): Promise<any>{
      return this.http.post(this.starUrl, {title: title, url: url}).toPromise().then(response=>{
        return response.json()
      }).catch(err=>{
        console.log(err);
      })
    }

    patchVisits(id): Promise<any>{
      return this.http.patch(this.starUrl + '/' + id, {}).toPromise().then(response=>{
        return response.json();
      }).catch(err=>{
        console.log(err);
      })
    }
}
