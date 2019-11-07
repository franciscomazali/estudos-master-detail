import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPessoasComponent } from './pages/lista-pessoas/lista-pessoas.component';
import { PessoaComponent } from './pages/pessoa/pessoa.component';


const routes: Routes = [
  { path: 'pessoas', component: ListaPessoasComponent },
  { path: 'pessoa/:id', component: PessoaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
