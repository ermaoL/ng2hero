import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import {Article} from "../../models/Article";
@Component({
  selector: 'article-detail',
  templateUrl: 'article-detail.component.html',
  styleUrls: ['article-detail.component.scss'],
  providers: [ArticleService],
})
export class ArticleDetailComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _articleService: ArticleService) {
  }

  article: Article;

  ngOnInit() {
    this._route.params.switchMap((params: Params) => {
      return this._articleService.getArticleById(params['id']);
    }).subscribe(article => {
      this.article = article;
    });
  }

}
