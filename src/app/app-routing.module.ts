import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NgModule} from "@angular/core";
import {AuthGuard} from './auth/auth-guard.service';

const routes: Routes = [

  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
