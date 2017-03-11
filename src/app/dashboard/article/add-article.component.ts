import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ArticleService} from '../../services/article.service';
@Component({
  selector: 'add-article',
  templateUrl: 'add-article.component.html',
  providers: [ArticleService]
})
export class AddArticleComponent implements OnInit {

  constructor(private _articleService: ArticleService, private _router: Router) {

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
        this._router.navigate(['dashboard/article']);
      }
    });
  }
}
