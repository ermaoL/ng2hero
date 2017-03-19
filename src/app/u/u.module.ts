import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './u-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile.component';
import { UserMenuComponent } from './user-menu.component';
import { UserSettingComponent } from './user-setting.component';
@NgModule({
    imports: [UserRoutingModule, CommonModule, SharedModule],
    exports: [],
    declarations: [UserComponent,ProfileComponent, UserMenuComponent, UserSettingComponent],
    providers: [],
})
export class UModule { }
