import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa.model';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  readonly url: string = 'http://www.mocky.io/v2/5dc365a130000067003473ec';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.url);
  }

  getDetail(id): Observable<Pessoa> {
    return this.http.get<Pessoa>(id);
  }
}
