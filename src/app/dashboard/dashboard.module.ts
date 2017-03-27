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
import { UserAddComponent } from './user/user-add.component';
import { ArticleComponent } from'./article/article.component';
import { AddArticleComponent } from './article/add-article.component';
import { EditArticleComponent } from './article/edit-article.component';
import { TagsComponent } from './tag/tags.components';
@NgModule({
    imports: [ SharedModule, HttpModule, DashBoardRoutingModule ],
    exports: [],
    declarations: [DashboardComponent, UserComponent, UserAddComponent, ArticleComponent, SiderComponent, AddArticleComponent, EditArticleComponent, TagsComponent],
    providers: [],
})
export class DashboardModule {

}
