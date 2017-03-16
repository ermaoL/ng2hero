import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../services/article.service';
@Component({
  selector: 'article-add-article',
  template: `<common-add-article></common-add-article>`,
  providers: [ArticleService]
})
export class AddArticleComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }
}
