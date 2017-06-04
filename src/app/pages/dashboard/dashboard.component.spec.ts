/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import {DashBoardRoutingModule} from "./dashboard-routing.module";
import {HttpModule} from "@angular/http";
import {SharedModule} from "../shared/shared.module";
import {AddArticleComponent} from "./article/add-article.component";
import {SiderComponent} from "./sider/sider.component";
import {ArticleComponent} from "./article/article.component";
import {UserComponent} from "./user/user.component";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule, HttpModule, DashBoardRoutingModule ],
      declarations: [DashboardComponent, UserComponent, ArticleComponent, SiderComponent, AddArticleComponent],
      providers: [],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
