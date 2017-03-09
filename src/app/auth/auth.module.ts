import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule, Http, RequestOptions, XHRBackend} from '@angular/http';

import {AuthGuard}   from './auth-guard.service';
import {TokenService} from './token.service';

import {AuthHttp} from './auth.http';
import {AuthConfig, IAuthConfig} from './auth.config';

import { myHttp } from './myHttp';

import { Token } from './token.model';
import { InterceptorService } from './interceptor.service';
import { LoadingComponent } from './loading.component';

export function authHttpFactory(tokenService: TokenService, http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    noTokenScheme: true, headerName: 'token', guards: {
      loggedInGuard: {
        redirectUrl: 'dashboard'
      },
      loggedOutGuard: {
        redirectUrl: 'login'
      }
    }
  }), tokenService, http, options);
}

export function myHttpFactory(xhrBackend: XHRBackend, options: RequestOptions, tokenService: TokenService, interceptor: InterceptorService){
  return new myHttp(xhrBackend, options, tokenService, interceptor);
}

@NgModule({
  imports: [CommonModule, HttpModule],
  exports: [LoadingComponent],
  declarations: [LoadingComponent],
  providers: [AuthGuard, TokenService],
})
export class AuthModule {
  static forRoot(config?: IAuthConfig): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        {
          provide: AuthHttp,
          useFactory: authHttpFactory,
          deps: [
            TokenService,
            Http,
            RequestOptions,
          ]
        },
        {provide: AuthConfig, useValue: config},
        {provide: myHttp, useFactory: myHttpFactory, deps: [XHRBackend, RequestOptions, TokenService, InterceptorService]},
        InterceptorService
      ]
    }
  }
}


export {TokenService, AuthGuard, AuthHttp, Token, myHttp};
