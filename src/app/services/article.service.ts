import {Injectable} from '@angular/core';
import {Article} from "../models/Article";
import 'rxjs/add/operator/toPromise';

import {AuthHttp, myHttp} from '../auth/';
import {articlesUrl} from './api';
@Injectable()
export class ArticleService {

  private artilcesUrl: string = articlesUrl;

  constructor(private http: myHttp) {
  }

  getAllArticle(): Promise<Article[]> {
    return this.http.get(this.artilcesUrl)
      .toPromise()
      .then(response => {
        return response.json().articles as Article[]
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getArticleById(id): Promise<Article> {
    return this.http.get(this.artilcesUrl + '/' + id)
      .toPromise()
      .then(response => {
        return response.json().article as Article;
      })
      .catch((err) => {
        console.log(err);
      })
  }

  addArticle(obj): Promise<any> {
    return this.http.post(this.artilcesUrl, obj)
      .toPromise()
      .then(response => {
        return response.json();
      }).catch((err) => {
        console.log(err);
      });
  }
}
