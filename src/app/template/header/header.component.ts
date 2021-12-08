import { Component, OnInit } from '@angular/core';
import { Page } from 'src/shared/Page.model';
import { Location } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pages: Page[] = [{title: 'Início', url: '/index'},
                   {title: 'Patrimônio', url: '/patrimonio'}];
  selectedPage: Page = this.pages[0];

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.pages.forEach(page => {
      if (this.location.path().indexOf(page.url) > -1) {
        this.selectedPage = page;
      }
    });
  }

  onSelect(page: Page): void {
    this.selectedPage = page;
  }
}
