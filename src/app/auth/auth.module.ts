import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AuthGuard }   from '../auth/auth-guard.service';
import { TokenService } from '../auth/token.service';
@NgModule({
    imports: [CommonModule, HttpModule],
    exports: [],
    declarations: [],
    providers: [AuthGuard, TokenService],
})
export class AuthModule { 
    static forRoot(): ModuleWithProviders{
        return {
            ngModule: AuthModule,
            providers: [
                    
            ]
        }
    }
}
