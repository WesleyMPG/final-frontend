import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marca } from '../shared/Marca.model';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  baseURL = environment.API_URL + 'marcas/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.baseURL);
  }
}
