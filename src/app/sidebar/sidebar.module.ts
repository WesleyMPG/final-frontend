import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarSectionComponent } from './sidebar-section/sidebar-section.component';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';


@NgModule({
  declarations: [
    SidebarComponent,
    SidebarSectionComponent,
    SidebarItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  exports: [
    SidebarComponent,
    SidebarSectionComponent,
    SidebarItemComponent,
  ]
})
export class SidebarModule { }
