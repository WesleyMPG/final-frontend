import { Component, OnInit } from '@angular/core';
import { Page } from 'src/shared/Page.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pages: Page[] = [{title: 'Início', url: '/index'},
                   {title: 'Patrimônio', url: '/patrimonio'}];
  selectedPage: Page = this.pages[0];

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(page: Page): void {
    this.selectedPage = page;
  }
}
