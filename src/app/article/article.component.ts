import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../services/article.service';
import {Article} from '../models/Article';

@Component({
  selector: 'article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.scss'],
  providers: [ArticleService],
})
export class ArticleComponent implements OnInit {

  articles;

  constructor(private _articleService: ArticleService) {

  }

  ngOnInit() {
    this.getArticleByPage(1);
  }

  getArticleByPage(page) {
    this._articleService.getAllArticle(page)
      .subscribe(data=> {
        console.log(data);
        if(data.success) {
          this.articles = data.articles;
        }
      })
  }


  pageChange(index){
    this.getArticleByPage(index);
  }
}
