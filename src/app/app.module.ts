import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
// import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "./app-routing.module";

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

// import {HeroDetailsComponent} from "./hero-details/hero-details.component";
// import {HeroesComponent} from "./heroes/heroes.component";
import { HeroService } from "./hero.service";
// import {DashboardComponent} from "./dashboard/dashboard.component";
// import { HeroSearchComponent } from './hero-search/hero-search.component';
// import { HeroesModule } from './heroes/heroes.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    // HeroesComponent,
    // HeroDetailsComponent,
    // DashboardComponent,
    // HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule,
    AppRoutingModule,
    // CommonModule,
    // HeroesModule,
    DashboardModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }



