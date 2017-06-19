import {NgModule} from '@angular/core';
import {ArticleComponent} from './article.component';
import {ArticleDetailComponent} from './article-detail.component';
import {AddArticleComponent} from './add-article.component';
import {ArticleRoutingModule} from './article-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { CommentComponent } from '../../components/comment/comment.component';

@NgModule({
  imports: [
    ArticleRoutingModule,
    SharedModule,
  ],
  declarations: [ArticleComponent, ArticleDetailComponent, AddArticleComponent, CommentComponent],
  providers: [],
})
export class ArticleModule {
}
