import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule, Http, RequestOptions} from '@angular/http';

import {AuthGuard}   from './auth-guard.service';
import {TokenService} from './token.service';

import {AuthHttp} from './auth.http';
import {AuthConfig, IAuthConfig} from './auth.config';

import { Token } from './token.model';

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


@NgModule({
  imports: [CommonModule, HttpModule],
  exports: [],
  declarations: [],
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
        {provide: AuthConfig, useValue: config}
      ]
    }
  }
}


export {TokenService, AuthGuard, AuthHttp, Token};
