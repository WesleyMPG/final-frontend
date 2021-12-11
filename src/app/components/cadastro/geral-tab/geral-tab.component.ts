import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemNotaService } from './../../../services/item-nota.service';
import { NotaFiscalService } from '../../../services/nota-fiscal.service';
import { FornecedorService } from './../../../services/fornecedor.service';
import { ItemNotaFiscal } from './../../../shared/ItemNotaFiscal.model';
import { NotaFiscal } from './../../../shared/NotaFiscal.model';
import { Fornecedor } from 'src/app/shared/Fornecedor.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-geral-tab',
  templateUrl: './geral-tab.component.html',
  styleUrls: ['./geral-tab.component.scss']
})
export class GeralTabComponent implements OnInit {

  form!: FormGroup;
  fieldNumero: string|null = null;

  selectedNota!: NotaFiscal;
  itemQtdVinc!: number;
  itemQtdDisp!: number;

  fornecedores: Fornecedor[] = [];
  notasFiscais: NotaFiscal[] = [];
  itensNota: ItemNotaFiscal[] = [];
  

  constructor(private fornService: FornecedorService,
              private notaService: NotaFiscalService,
              private itemService: ItemNotaService) {
    this.itemService.bensSubject.subscribe(bens => {
      const item = itemService.selectedItem;
      this.itemQtdVinc = bens.length;
      if (item) {
        this.itemQtdDisp = item.qtd - this.itemQtdVinc;
      }
    });
  }

  ngOnInit(): void {
    this._createForm();
    this.fornService.getAll().subscribe(fornecedores => {
      this.fornecedores = fornecedores;
    });
  }

  onChangeFornecedor() {
    this.notasFiscais = this.form.value.fornecedor.notas_fiscais;
    this._resetNotas()
  }

  onChangeNota() {
    if (this.form.value.nota !== null) {
      this.selectedNota = this.form.value.nota;
      this._resetItems();
      this.notaService.selectedNota = this.selectedNota;
      this.fieldNumero = `${this.selectedNota.ano}${this.selectedNota.numero}`

      const id = this.form.value.nota.id_nota_fiscal
      this.notaService.getAllNotaItems(id).subscribe(itens => {
        this.itensNota = itens;
      });
    }
  }

  onChangeItem() {
    if (this.form.value.item !== null) {
      this.itemService.selectedItem = this.form.value.item;
    }
  }

  private _createForm(): void {
    this.form = new FormGroup({
      fornecedor: new FormControl(null),
      nota: new FormControl(null),
      item: new FormControl(null),
    })
  }

  private _resetItems(): void {
    this.form.controls['item'].reset(null);
    this.itemQtdVinc = 0;
    this.itemQtdDisp = 0;
  }

  private _resetNotas(): void {
    this._resetItems();
    this.fieldNumero = null
    this.form.controls['nota'].reset(null);
  }
}
