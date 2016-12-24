import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { DashboardComponent }   from './dashboard.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { DashBoardRoutingModule } from './dashboard-routing.module';
@NgModule({
    imports: [ CommonModule, FormsModule, HttpModule, DashBoardRoutingModule ],
    exports: [],
    declarations: [DashboardComponent, HeroSearchComponent],
    providers: [],
})
export class DashboardModule { }