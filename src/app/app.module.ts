import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

/**
 * App Root
 */
import { AppComponent } from "./app.component";
import { BannerComponent } from './components/banner/banner.component';

/**
 * Routing Module
 */
import { AppRoutingModule } from "./app-routing.module";

/**
 * Feature Modules
 */
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth';
import { UserService } from './services/user.service';
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    AuthModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }



