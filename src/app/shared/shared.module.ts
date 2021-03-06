import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MarkedPipe} from './marked.pipe';
import {EllipsisPipe} from './ellipsis.pipe';
import {TabsModule} from '../components/tabs/tabs.module';

import {CommonAddArticleComponent} from '../components/add-article/common-add-article.component';
import {TreeComponent} from '../components/tree/tree.component';

import {PaginationComponent} from '../components/pagination/pagination.component';

@NgModule({
  imports: [CommonModule, FormsModule, TabsModule],
  exports: [CommonModule, FormsModule, TabsModule, MarkedPipe, EllipsisPipe, CommonAddArticleComponent, TreeComponent, PaginationComponent],
  declarations: [MarkedPipe, EllipsisPipe, CommonAddArticleComponent, TreeComponent, PaginationComponent],
  providers: [],
})
export class SharedModule {
}
