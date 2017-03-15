import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule, Http, RequestOptions, XHRBackend} from '@angular/http';

import {AuthGuard}   from './auth-guard.service';
import {AdminGuard} from './admin-guard.service';
import {TokenService} from './token.service';

import {AuthConfig, IAuthConfig} from './auth.config';

import {AuthHttp} from './auth-http';

import {Token} from './token.model';
import {InterceptorService} from './interceptor.service';
import {LoadingComponent} from './loading.component';

export function authHttpFactory(xhrBackend: XHRBackend, options: RequestOptions, tokenService: TokenService, interceptor: InterceptorService) {
  return new AuthHttp(xhrBackend, options, tokenService, interceptor);
}

@NgModule({
  imports: [CommonModule, HttpModule],
  exports: [LoadingComponent],
  declarations: [LoadingComponent],
  providers: [AuthGuard, AdminGuard, TokenService],
})
export class AuthModule {
  static forRoot(config?: IAuthConfig): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        {provide: AuthConfig, useValue: config},
        {
          provide: AuthHttp,
          useFactory: authHttpFactory,
          deps: [XHRBackend, RequestOptions, TokenService, InterceptorService]
        },
        InterceptorService
      ]
    }
  }
}


export {TokenService, AuthGuard, AdminGuard, Token, AuthHttp};
