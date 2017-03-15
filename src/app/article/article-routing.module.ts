import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './article.component';
import { ArticleDetailComponent } from './article-detail.component';
import { AddArticleComponent } from './add-article.component';
const routes: Routes = [
  { path: '', component: ArticleComponent },
  { path: 'add', component: AddArticleComponent},
  { path: ':id', component: ArticleDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule { }

export const routedComponents = [ArticleComponent];
