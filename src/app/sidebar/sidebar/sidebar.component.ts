import { Component, OnInit, Input, ViewChild, ElementRef, 
        ContentChildren, QueryList, TemplateRef } from '@angular/core';

@Component({
  selector: 'sb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() title: string = '';
  @Input() open = false;

  @ViewChild('sidebar') sidebarRef!: ElementRef;
  @ViewChild('sidebarShowBtn') btnRef!: ElementRef;

  @ContentChildren('section') public sections!: QueryList<TemplateRef<any>>;

  constructor() { }

  ngOnInit(): void {
  }

  openNav(): void {
    this.sidebarRef.nativeElement.style.left = "0";
    this.btnRef.nativeElement.style.left = "220px";
    this.open = true;
  }

  closeNav(): void {
    this.sidebarRef.nativeElement.style.left = "-220px";
    this.btnRef.nativeElement.style.left = "0";
    this.open = false;
  }

  btnToggle(): void {
    if (this.open) {
      this.closeNav();
    } else {
      this.openNav();
    }
  }
}
