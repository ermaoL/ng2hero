import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './article.component';
import { ArticleDetailComponent } from './article-detail.component';
import { AddArticleComponent } from './add-article.component';
import { AuthGuard } from '../../modules/auth';
const routes: Routes = [
  { path: '', component: ArticleComponent },
  { path: 'add', component: AddArticleComponent, canActivate: [AuthGuard]},
  { path: ':id', component: ArticleDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule { }

export const routedComponents = [ArticleComponent];
