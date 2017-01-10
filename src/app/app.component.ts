import {Component} from "@angular/core";
@Component({
  selector: 'app-root',
  template: `
  <app-title [subtitle]="subtitle"></app-title>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/login" routerLinkActive="active">Login</a>    
  </nav>
  <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = "Tour of Heroes";
  subtitle = "(Final)";
}
