import { ItemNotaFiscal } from 'src/app/shared/ItemNotaFiscal.model';
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

  selectedItemSubject = new BehaviorSubject<ItemNotaFiscal|null>(null);
  bensSubject: BehaviorSubject<Bem[]> = new BehaviorSubject<Bem[]>([]);


  constructor(private http: HttpClient) { }

  fetchSelectedItemBens(): void {
    const id = this.selectedItem?.id_item_nota_fiscal;
    const url = `${this.itensURL}${id}/bens`;
    this.http.get<Bem[]>(url).subscribe(bens => {
      this.bensSubject.next(bens);
    });
  }

  createBem(bem: Bem): Observable<Bem> {
    return this.http.post<Bem>(this.bemURL, bem);
  }

  vinculateSelectedItem(): void {
    if (this.selectedItem) {
      const id = this.selectedItem.id_item_nota_fiscal;
      const url = `${this.itensURL}${id}/`;
      const item: ItemNotaFiscal = {...this.selectedItem,
                                    vinculado: 't'};

      this.http.put<ItemNotaFiscal>(url, item).subscribe(() => {
        console.log('Item acaba de ser vinculado!');
      });
    }
  }

  get selectedItem(): ItemNotaFiscal | null {
    return this.selectedItemSubject.value;
  }

  set selectedItem(item: ItemNotaFiscal | null) {
    this.selectedItemSubject.next(item);
    if (item) {
      this.fetchSelectedItemBens();
    };
  }

  get bens(): Bem[] {
    return this.bensSubject.value;
  }
}
