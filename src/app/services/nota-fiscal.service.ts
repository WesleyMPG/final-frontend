import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotaFiscal } from './../shared/NotaFiscal.model';
import { ItemNotaFiscal } from '../shared/ItemNotaFiscal.model';

@Injectable({
  providedIn: 'root'
})
export class NotaFiscalService {

  baseURL = environment.API_URL + 'notas-fiscais/';

  selectedNota!: NotaFiscal;

  constructor(private http: HttpClient) { }

  getAllNotaItems(id: number): Observable<ItemNotaFiscal[]> {
    const url = `${this.baseURL}${id}/itens`;
    return this.http.get<ItemNotaFiscal[]>(url);
  }
}