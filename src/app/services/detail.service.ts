import { Bem } from 'src/app/shared/Bem.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Marca } from '../shared/Marca.model';
import { Estado } from '../shared/Estado.model';
import { Situacao } from '../shared/Situacao.model';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  marcaURL = environment.API_URL + 'marcas/';
  estadoURL = environment.API_URL + 'estados/';
  situacaoURL = environment.API_URL + 'situacoes/';

  selectedBemSubject = new BehaviorSubject<Bem|null>(null);

  constructor(private http: HttpClient) { }

  getAllMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.marcaURL);
  }

  getMarcaById(id: number): Observable<Marca> {
    return this.http.get<Marca>(`${this.marcaURL}${id}`);
  }
  
  getEstadoById(id: number): Observable<Estado> {
    return this.http.get<Estado>(`${this.estadoURL}${id}`);
  }

  getSituacaoById(id: number): Observable<Situacao> {
    return this.http.get<Situacao>(`${this.situacaoURL}${id}`);
  }

  get selectedBem(): Bem|null {
    return this.selectedBemSubject.value;
  }

  set selectedBem(bem: Bem|null) {
    this.selectedBemSubject.next(bem);
  }
}
