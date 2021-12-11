import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fornecedor } from '../shared/Fornecedor.model';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  baseURL = environment.API_URL + 'fornecedores/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.baseURL);
  }
}
