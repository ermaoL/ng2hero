import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeroesComponent }   from './heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module'
@NgModule({
    imports: [CommonModule, FormsModule, HttpModule, HeroesRoutingModule],
    exports: [],
    declarations: [HeroesComponent],
    providers: [],
})
export class HeroesModule { }
