import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sume-software';

  showSidebar: boolean = false;

  constructor(private location: Location) { 
    location.onUrlChange( url => {
      this.showSidebar = url.indexOf('/index') === -1;
    });
  }
}
