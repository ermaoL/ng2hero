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

}
