import {Injectable} from '@angular/core';
import {Article} from "../models/Article";
import 'rxjs/add/operator/toPromise';

import {AuthHttp} from '../auth/auth.http';
import {articlesUrl} from './api';
@Injectable()
export class ArticleService {

  private artilcesUrl: string = articlesUrl;

  constructor(private http: AuthHttp) {
  }

  getAllArticle(): Promise<Article[]> {
    return this.http.get(this.artilcesUrl)
      .toPromise()
      .then(response => {
        return response.json().articles as Article[]
      })
      .catch((err) => {
      });
  }
}
