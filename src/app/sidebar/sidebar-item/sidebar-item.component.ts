import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';


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

  constructor(private location: Location) { }

  ngOnInit(): void {
    
  }

  ngAfterContentInit() {
    if (this.location.path().indexOf(this.url) > -1) {
      this.active = true;
      this.isActive.emit(true);
    }
  }
}
