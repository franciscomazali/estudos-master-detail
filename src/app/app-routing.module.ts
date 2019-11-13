import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPessoasComponent } from './pages/lista-pessoas/lista-pessoas.component';
import { PessoaComponent } from './pages/pessoa/pessoa.component';
import { NovoFuncionarioComponent } from './pages/novo-funcionario/novo-funcionario.component';


const routes: Routes = [
  { path: '', redirectTo: 'pessoas', pathMatch: 'full' },
  { path: 'pessoas', component: ListaPessoasComponent },
  { path: 'pessoa/:id/editar', component: PessoaComponent },
  { path: 'pessoas/novo', component: NovoFuncionarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
