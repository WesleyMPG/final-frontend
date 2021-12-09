import { CadastroComponent } from './views/cadastro/cadastro.component';
import { IndexComponent } from './views/index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  PratrimonioComponent 
} from './views/pratrimonio/pratrimonio.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'patrimonio', component: PratrimonioComponent },
  { path: 'patrimonio/cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
