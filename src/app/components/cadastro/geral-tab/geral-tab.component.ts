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

  selectedNota!: NotaFiscal;
  itemQtdVinc!: number;
  itemQtdDisp!: number;

  fornecedores: Fornecedor[] = [];
  notasFiscais: NotaFiscal[] = [];
  itensNota: ItemNotaFiscal[] = [];

  constructor(private fornService: FornecedorService,
              private notaService: NotaFiscalService,
              private itemService: ItemNotaService) {}

  ngOnInit(): void {
    this._createForm();
    this.fornService.getAll().subscribe(fornecedores => {
      this.fornecedores = fornecedores;
      console.log(fornecedores);
    });
  }

  onChangeFornecedor() {
    this.notasFiscais = this.form.value.fornecedor.notas_fiscais;
    this._resetNotas()
  }

  onChangeNota() {
    if (this.form.value.nota !== null) {
      this.selectedNota = this.form.value.nota;
      const id = this.form.value.nota.id_nota_fiscal
      this._resetItems();
      
      this.notaService.getAllNotaItems(id).subscribe(itens => {
        this.itensNota = itens;
      });
    }
  }

  onChangeItem() {
    if (this.form.value.item !== null) {
      const item = this.itemService.selectedItem = this.form.value.item;

      this.itemService.getSelectedItemAllBens().subscribe(bens => {
        this.itemQtdVinc = bens.length;
        console.log(bens)
        this.itemQtdDisp = item.qtd - this.itemQtdVinc;
      });
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
    this.form.controls['nota'].reset(null);
  }
}
