import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { AuthGuard, AdminGuard } from '../../modules/auth';

import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user/user-add.component';
import { ArticleComponent } from './article/article.component';
import { AddArticleComponent } from './article/add-article.component';
import { EditArticleComponent } from './article/edit-article.component';
import { TagsComponent } from './tag/tags.components';
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
        path: 'user/add',
        component: UserAddComponent,
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
      },
      {
        path: 'tag',
        component: TagsComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashBoardRoutingModule { }
