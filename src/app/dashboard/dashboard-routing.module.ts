import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { AuthGuard } from '../auth';

import { UserComponent } from './user/user.component';
import { ArticleComponent } from './article/article.component';
import { AddArticleComponent } from './article/add-article.component';
const routes: Routes = [
  { path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'article',
        component: ArticleComponent,
        pathMatch: 'full',
      },
      {
        path: 'article/add',
        component: AddArticleComponent,
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashBoardRoutingModule { }
