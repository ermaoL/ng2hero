import {Routes, RouterModule} from "@angular/router";

import {NgModule} from "@angular/core";
const routes: Routes = [
  {
    path: 'article',
    loadChildren: 'app/pages/article/article.module#ArticleModule',
  },
  {
    path: 'dashboard',
    loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule',
  },
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule',
  },
  {
    path: 'u',
    loadChildren: 'app/pages/u/u.module#UModule',
  },
  {
    path: '',
    redirectTo: 'article',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
