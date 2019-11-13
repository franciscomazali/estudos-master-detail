import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa.model';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  readonly url: string = 'https://estudosapi.herokuapp.com/pessoa';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.url);
  }

  getDetail(id): Observable<Pessoa> {
    const param = this.url + '/' + id;
    return this.http.get<Pessoa>(param);
  }
}
