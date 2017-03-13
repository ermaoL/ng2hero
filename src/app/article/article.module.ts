import {NgModule} from '@angular/core';

import {ArticleComponent} from './article.component';
import {ArticleDetailComponent} from './article-detail.component';
import {ArticleRoutingModule} from './article-routing.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    ArticleRoutingModule,
    SharedModule
  ],
  declarations: [ArticleComponent, ArticleDetailComponent],
  providers: [],
})
export class ArticleModule {
}
