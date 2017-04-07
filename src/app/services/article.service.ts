import {Injectable} from '@angular/core';
import {Article} from "../models/Article";
import 'rxjs/add/operator/toPromise';

import {AuthHttp} from '../auth';
import {articlesUrl, dashboardArticlesUrl, meUrl} from './api';
@Injectable()
export class ArticleService {

  private artilcesUrl: string = articlesUrl;
  private dashboardArticlesUrl: string = dashboardArticlesUrl;
  private meUrl: string = meUrl;

  constructor(private http: AuthHttp) {
  }


  getArticlesForDashboard(): Promise<Article[]> {
    return this.http.get(this.dashboardArticlesUrl)
      .toPromise()
      .then(response => {
        return response.json().articles as Article[]
      })
      .catch((err) => {
        console.log(err);
      });
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

  getMyArticles(): Promise<Article[]> {
    return this.http.get(this.meUrl + '/articles')
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

  editArticle(id, obj): Promise<any> {
    return this.http.put(this.artilcesUrl + '/' + id, obj)
      .toPromise()
      .then(response => {
        return response.json();
      }).catch((err) => {
        console.log(err);
      });
  }
}
