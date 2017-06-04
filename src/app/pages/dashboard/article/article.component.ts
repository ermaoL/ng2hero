import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article.service'

@Component({
    selector: 'article',
    templateUrl: 'article.component.html',
    providers: [ ArticleService ]
})
export class ArticleComponent implements OnInit {

    articles;

    constructor(private _articleService: ArticleService) { }

    ngOnInit() {
        this.getArticlesByPage(1);
    }

    getArticlesByPage(page) {
      this._articleService.getArticlesForDashboard(page)
        .subscribe(articles=>{
          this.articles = articles;
        })
    }

    pageChange(page){
      this.getArticlesByPage(page);
    }
}
