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

/**
 * services
 */
import { AuthGuard } from './guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CoreModule.forRoot({userName: ""}),
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }



