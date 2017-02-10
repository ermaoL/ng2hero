import { NgModule } from '@angular/core';

import { ArticleComponent }   from './article.component';
import { ArticleRoutingModule } from './article-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http';
@NgModule({
    imports: [ SharedModule, HttpModule, ArticleRoutingModule ],
    exports: [],
    declarations: [ ArticleComponent ],
    providers: [],
})
export class ArticleModule { }
