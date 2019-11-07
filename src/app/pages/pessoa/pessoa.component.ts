import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa.model';
import { PessoaService } from 'src/app/services/pessoa.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  pessoa: Pessoa;

  constructor(private pessoaDetalhe: PessoaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(param => {
        const id = +param.get('id');
        console.log(id);
        const link = `http://www.mocky.io/v2${id}`;
        return this.pessoaDetalhe.getDetail(link);
      })
    ).subscribe(pes => this.pessoa = pes);
  }
}
