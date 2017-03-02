import {Component, AfterContentInit, QueryList, ContentChildren} from '@angular/core';

import {TabComponent} from './tab.component';

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.component.html'
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
    let activeTab = this.tabs.filter((tab)=> tab.active);
    if (activeTab.length == 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach(tab=>tab.active = false);
    tab.active = true;
  }

}
