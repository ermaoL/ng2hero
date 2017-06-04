import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../../shared/shared.module'

import { LoginComponent }   from './login.component';
import { LoginRoutingModule } from './login-routing.module';

import { TabsModule } from '../../components/tabs/tabs.module';

@NgModule({
    imports: [
        SharedModule,
        HttpModule,
        LoginRoutingModule,
        TabsModule
    ],
    exports: [],
    declarations: [LoginComponent],
    providers: [],
})
export class LoginModule { }
