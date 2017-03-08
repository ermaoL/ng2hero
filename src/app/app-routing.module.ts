import {Routes, RouterModule} from "@angular/router";

import {NgModule} from "@angular/core";
const routes: Routes = [
  {
    path: 'article',
    loadChildren: 'app/article/article.module#ArticleModule',
  },
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule',

  },
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule',

  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
