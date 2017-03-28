import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from '../auth';

import {UserComponent} from './user.component';
import {ProfileComponent} from './profile.component';
import {UserMenuComponent} from './user-menu.component';
import {UserSettingComponent} from './user-setting.component';
import {StarComponent} from './star.component';

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
