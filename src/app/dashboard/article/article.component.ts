import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../../services/article.service'
import { Article } from '../../models/Article'
@Component({
    selector: 'article',
    templateUrl: 'article.component.html',
    providers: [ ArticleService ]
})
export class ArticleComponent implements OnInit {

    articles: Article[] = [];

    constructor(private _articleService: ArticleService) { }

    ngOnInit() {
        this._articleService.getArticlesForDashboard()
        .then(articles=>{
            this.articles = articles;
        }).catch(err=>{
        })
    }
}
