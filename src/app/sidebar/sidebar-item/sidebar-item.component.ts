import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Location, NgLocalization } from '@angular/common';


@Component({
  selector: 'sb-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  @Input() name = '';
  @Input() url = '';

  @Output() isActive = new EventEmitter<boolean>();

  active = false;

  constructor(private location: Location) {
    location.onUrlChange((url: string) => {
      this.active = this.location.path().indexOf(this.url) > -1;
    });
  }

  ngOnInit(): void {    
  }

  ngAfterContentInit() {
    if (this.location.path().indexOf(this.url) > -1) {
      this.activate();
    }
  }

  activate() {
    this.active = true;
    this.isActive.emit(true);
  }
}
