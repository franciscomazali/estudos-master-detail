import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { PessoaComponent } from './pages/pessoa/pessoa.component';
import { ListaPessoasComponent } from './pages/lista-pessoas/lista-pessoas.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    ListaPessoasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
