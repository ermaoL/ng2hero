import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { AuthGuard, AdminGuard } from '../auth';

import { UserComponent } from './user/user.component';
import { ArticleComponent } from './article/article.component';
import { AddArticleComponent } from './article/add-article.component';
import { EditArticleComponent } from './article/edit-article.component';
const routes: Routes = [
  { path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard, AdminGuard],
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
      },
      {
        path: 'article/edit/:id',
        component: EditArticleComponent,
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashBoardRoutingModule { }
