import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { BensTabComponent } from './components/cadastro/bens-tab/bens-tab.component';
import { ModalComponent } from './components/modal/modal.component';
import { CloseBtnStyleDirective } from './components/modal/close-btn-style.directive';
import { AddBemModalComponent } from './components/cadastro/bens-tab/add-bem-modal/add-bem-modal.component';
import { DetailModalComponent } from './components/cadastro/bens-tab/detail-modal/detail-modal.component';
import { ObsTabComponent } from './components/cadastro/obs-tab/obs-tab.component';


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
    BensTabComponent,
    ModalComponent,
    CloseBtnStyleDirective,
    AddBemModalComponent,
    DetailModalComponent,
    ObsTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SidebarModule,
    TabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
