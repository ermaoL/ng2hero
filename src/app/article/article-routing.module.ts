import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './article.component';
import { AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [
  { path: '', component: ArticleComponent,  canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule { }

export const routedComponents = [ArticleComponent];