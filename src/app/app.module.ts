import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialRootModule } from '@angular/material';

/**
 * App Root
 */
import { AppComponent } from "./app.component";

/**
 * Routing Module
 */
import { AppRoutingModule } from "./app-routing.module";

/**
 * Feature Modules
 */
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth';

import { SiderComponent } from './sider/sider.component';
@NgModule({
  declarations: [
    AppComponent,
    SiderComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    MaterialRootModule,
    CoreModule.forRoot({userName: "haha"}),
    AuthModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



