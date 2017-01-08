import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

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

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CoreModule.forRoot({userName: "hhahahhah"}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



