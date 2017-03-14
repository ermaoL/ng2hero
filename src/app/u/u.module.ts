import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './u-routing.module';
@NgModule({
    imports: [UserRoutingModule, CommonModule],
    exports: [],
    declarations: [UserComponent],
    providers: [],
})
export class UModule { }
