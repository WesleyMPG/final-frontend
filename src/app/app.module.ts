import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { SidebarModule } from './sidebar/sidebar.module';
import { TabsModule } from './tabs/tabs.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { IndexComponent } from './views/index/index.component';
import { CardComponent } from './components/card/card.component';
import { PratrimonioComponent } from './views/pratrimonio/pratrimonio.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    CardComponent,
    PratrimonioComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    TabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
