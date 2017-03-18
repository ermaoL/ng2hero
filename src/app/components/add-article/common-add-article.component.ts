import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ArticleService} from '../../services/article.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from "rxjs";

@Component({
  selector: 'common-add-article',
  templateUrl: 'common-add-article.component.html',
  providers: [ArticleService],
  styleUrls: ['common-add-article.component.scss']
})
export class CommonAddArticleComponent implements OnInit {


  constructor(private _articleService: ArticleService, private _location: Location, private _route: ActivatedRoute) {

  }

  @Input() type: String;

  isEdit: boolean = false;
  title: String = "";
  content: String = "";
  articleId: String = "";
  ngOnInit() {
    console.log(this._route.params);
    this._route.params.switchMap((params: Params) => {
      if(params['id']) {
        this.isEdit = true;
        this.articleId = params['id'];
        return this._articleService.getArticleById(params['id']);
      }else{
        return Observable.of({title: "", content: ""})
      }
    }).subscribe(article => {
      this.title = article && article.title;
      this.content = article && article.content;
    });
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

  editArticle(title, content){
    if (!title) {
      alert("title不能为空");
      return;
    }
    if (!content) {
      alert("文章内容不能为空");
      return;
    }

    this._articleService.editArticle( this.articleId, {title: title, content: content}).then(data => {
      if (data.success) {
        this._location.back();
      }
    });
  }
}
