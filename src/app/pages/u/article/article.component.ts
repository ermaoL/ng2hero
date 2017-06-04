import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article.service';
import {Article} from "../../../models/Article";
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  constructor(private _articleService: ArticleService) { }
  articles:Article[];
  ngOnInit() {
    this._articleService.getMyArticles().then(res=>{
      this.articles = res;
    }).catch(err=>{
      console.log(err);
    })
  }

}
