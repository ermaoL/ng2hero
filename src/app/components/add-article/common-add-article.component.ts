import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ArticleService} from '../../services/article.service';
@Component({
  selector: 'common-add-article',
  templateUrl: 'common-add-article.component.html',
  providers: [ArticleService]
})
export class CommonAddArticleComponent implements OnInit {

  constructor(private _articleService: ArticleService, private _location: Location) {

  }

  ngOnInit() {

  }

  addArticle(title, content) {
    if (!title) {
      alert("title不能为空");
      return;
    }
    if (!content) {
      alert("文章内容不能为空");
      return;
    }
    this._articleService.addArticle({title: title, content: content}).then(data => {
      if (data.success) {
        this._location.back();
      }
    });
  }
}
