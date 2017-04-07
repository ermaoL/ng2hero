import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from '../auth';

import {UserComponent} from './user.component';
import {ProfileComponent} from './profile/profile.component';
import {UserMenuComponent} from './user-menu/user-menu.component';
import {UserSettingComponent} from './user-setting/user-setting.component';
import {StarComponent} from './star/star.component';
import {ArticleComponent} from './article/article.component';
import {EditArticleComponent} from './article/edit-article.component';
const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: UserMenuComponent,
        children: [
          {
            path: 'setting',
            component: UserSettingComponent
          },
          {
            path: 'profile',
            component: ProfileComponent
          },
          {
            path: 'star',
            component: StarComponent
          },
          {
            path: 'article/list',
            component: ArticleComponent
          },
          {
            path: 'article/edit/:id',
            component: EditArticleComponent
          }
        ]
      },

    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
}

export const routedComponents = [UserComponent];
