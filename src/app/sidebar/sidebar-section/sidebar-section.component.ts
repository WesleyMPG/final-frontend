import { Component, ContentChildren, Input, OnInit, QueryList, TemplateRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';

@Component({
  selector: 'sb-section',
  templateUrl: './sidebar-section.component.html',
  styleUrls: ['./sidebar-section.component.scss'],
  animations: [
    trigger('toggleOpen', [
      state('open', style({
        height: '*'
      })),
      state('closed', style({
        height: 0,
      })),
      transition('open => closed', animate('200ms ease-in')),
      transition('closed => open', animate('200ms ease-out'))
    ]),

    trigger('rotArrow', [
      state('up', style({
        transform: 'rotate(0deg)'
      })),
      state('down', style({
        transform: 'rotate(180deg)'
      })),
      transition('up => down', animate('200ms ease-in')),
      transition('down => up', animate('200ms ease-out'))
    ])
  ]
})
export class SidebarSectionComponent implements OnInit {

  @Input() title: string = '';
  @ContentChildren(SidebarItemComponent) content!: QueryList<SidebarItemComponent>;

  open = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.content.toArray().forEach(item => {
      if (item.active) {
        this.open = true;
      }
    });
  }

  toggleOpen() {
    this.open = !this.open;
  }
}
