import {NgModule} from '@angular/core';

import {ArticleComponent} from './article.component';
import {ArticleRoutingModule} from './article-routing.module';

@NgModule({
  imports: [
    ArticleRoutingModule,
  ],
  declarations: [ArticleComponent],
  providers: [],
})
export class ArticleModule {
}
