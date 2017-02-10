import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Article} from "../models/Article";
import {Observable} from "rxjs";
import 'rxjs/add/operator/toPromise';

import { AuthHttp } from '../auth/auth.http';

@Injectable()
export class ArticleService {

  private artilcesUrl = 'http://localhost:3000/api/articles';

  constructor(private http: AuthHttp) {
  }

  getAllArticle(): Promise<Article[]> {
    return this.http.get(this.artilcesUrl )
      .toPromise()
      .then(response => {
        console.log(response.json())
        return response.json().articles as Article[]})
      .catch((err)=>{
          console.log(err.json());
      });
  }
}
