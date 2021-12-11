import { ItemNotaFiscal } from './../shared/ItemNotaFiscal.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Bem } from '../shared/Bem.model';

@Injectable({
  providedIn: 'root'
})
export class ItemNotaService {

  itensURL = environment.API_URL + 'itens-nota-fiscal/';
  bemURL = environment.API_URL + 'bens/';

  selectedItem?: ItemNotaFiscal;
  bens: Bem[] = [];


  constructor(private http: HttpClient) { }

  getSelectedItemAllBens(): Observable<Bem[]> {
    const id = this.selectedItem?.id_item_nota_fiscal;
    const url = `${this.itensURL}${id}/bens`;
    return this.http.get<Bem[]>(url);
  }

  createBem(bem: Bem): Observable<Bem> {
    return this.http.post<Bem>(this.bemURL, bem);
  }
}
