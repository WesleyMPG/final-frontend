import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'tb-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() title = '';
  @Input() active = false;

  @ViewChild('content', {read: TemplateRef}) content!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

}
