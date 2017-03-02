import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule, Http, RequestOptions} from '@angular/http';

import {AuthGuard}   from '../auth/auth-guard.service';
import {TokenService} from '../auth/token.service';

import {AuthHttp} from '../auth/auth.http';
import {AuthConfig, IAuthConfig} from '../auth/auth.config';

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

export {TokenService};

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
