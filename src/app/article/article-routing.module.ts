import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './article.component';
import { ArticleDetailComponent } from './article-detail.component';
const routes: Routes = [
  { path: '', component: ArticleComponent },
  { path: ':id', component: ArticleDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule { }

export const routedComponents = [ArticleComponent];
