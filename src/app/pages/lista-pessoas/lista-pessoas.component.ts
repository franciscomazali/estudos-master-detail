import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Pessoa } from 'src/app/models/pessoa.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.scss']
})
export class ListaPessoasComponent implements OnInit {

  pessoas: Pessoa[];

  constructor(private pessooaLista: PessoaService) { }

  ngOnInit() {
    this.pessooaLista.getAll().subscribe(res => {
      this.pessoas = res;
    });
    // this.pessooaLista.getAll().subscribe(people => console.log(people));
  }

}
