import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { DashboardComponent }   from './dashboard.component';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
/**
 * 页面的容器
 */
import { SiderComponent } from './sider/sider.component';
import { UserComponent } from './user/user.component';
import { ArticleComponent } from'./article/article.component';
import { AddArticleComponent } from './article/add-article.component';
@NgModule({
    imports: [ SharedModule, HttpModule, DashBoardRoutingModule ],
    exports: [],
    declarations: [DashboardComponent, UserComponent, ArticleComponent, SiderComponent, AddArticleComponent],
    providers: [],
})
export class DashboardModule {

}
