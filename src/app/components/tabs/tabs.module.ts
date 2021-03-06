import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ TabsComponent, TabComponent],
  declarations: [ TabsComponent, TabComponent ],
  providers: [],
})
export class TabsModule { }
