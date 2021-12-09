import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { SidebarModule } from './sidebar/sidebar.module';
import { TabsModule } from './tabs/tabs.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { IndexComponent } from './views/index/index.component';
import { CardComponent } from './components/card/card.component';
import { PratrimonioComponent } from './views/pratrimonio/pratrimonio.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { GeralTabComponent } from './components/cadastro/geral-tab/geral-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    CardComponent,
    PratrimonioComponent,
    SidebarComponent,
    CadastroComponent,
    GeralTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SidebarModule,
    TabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
