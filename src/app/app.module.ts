import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { PessoaComponent } from './pages/pessoa/pessoa.component';
import { ListaPessoasComponent } from './pages/lista-pessoas/lista-pessoas.component';
import { NovoFuncionarioComponent } from './pages/novo-funcionario/novo-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    ListaPessoasComponent,
    NovoFuncionarioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
