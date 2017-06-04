import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service'

import { BannerComponent } from './components/banner/banner.component';
import {LoadingComponent} from "./modules/auth/loading.component";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {AuthModule} from "./modules/auth/auth.module";
import {CoreModule} from "./core/core.module";
import {BrowserModule} from "@angular/platform-browser";
import {APP_BASE_HREF} from "@angular/common";

describe('AppComponent', () => {

  let authServiceStub = {

  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BannerComponent,
      ],

      imports: [
        BrowserModule,
        CoreModule.forRoot(),
        AuthModule.forRoot(),
        AppRoutingModule,
      ],
      providers: [{provide: AuthService, useValue: authServiceStub}, {provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app works!'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   console.log(app);
  //   expect(app.title).toEqual('app works!');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
