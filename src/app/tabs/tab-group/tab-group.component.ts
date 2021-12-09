import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tb-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements OnInit {

  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter(tab => tab.active);

    if (activeTabs.length === 0) {
      this.onSelect(this.tabs.first);
    }
  }

  onSelect(tab: TabComponent): void {
    this.tabs.toArray().forEach(t => t.active = false);
    tab.active = true;
  }
}
