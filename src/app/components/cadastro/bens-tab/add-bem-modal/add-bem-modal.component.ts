import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, 
  AbstractControl, ValidationErrors } from '@angular/forms';
import { Bem } from 'src/app/shared/Bem.model';
import { ItemNotaFiscal } from 'src/app/shared/ItemNotaFiscal.model';
import { Marca } from 'src/app/shared/Marca.model';
import { ItemNotaService } from 'src/app/services/item-nota.service';
import { MarcaService } from 'src/app/services/marca.service';
import { NotaFiscalService } from 'src/app/services/nota-fiscal.service';
  
  
@Component({
  selector: 'app-add-bem-modal',
  templateUrl: './add-bem-modal.component.html',
  styleUrls: ['./add-bem-modal.component.scss'],
  host: {'class': 'modal fade'}
})
export class AddBemModalComponent implements OnInit {

  @Input() parentUpdate!: Function;

  form!: FormGroup;
  valorField = 0;
  qtd_max = 0;
  marcas: Marca[] = [];

  constructor(private notaService: NotaFiscalService,
              private itemService: ItemNotaService,
              private marcaService: MarcaService) {
    itemService.selectedItemSubject.subscribe(item => {
      this.valorField = (item) ? Number(item.valor_unitario) : 0;
    });
    itemService.bensSubject.subscribe(bens => {
      this._set_qtd_max(itemService.selectedItem);
    });
  }

  ngOnInit(): void {
    this._create_form();
    this.marcaService.getAll().subscribe(marcas => {
      this.marcas = marcas;
    });

  }

  createItem() {
    const nota = this.notaService.selectedNota;
    const item = <ItemNotaFiscal>this.itemService.selectedItem;
    const preBem = this.form.value;
    const bem: Bem = {
      id_item_nota_fiscal: item.id_item_nota_fiscal,
      tombamento: `${nota.ano}${nota.numero}`,
      id_estado_bem: 1,
      id_situacao_uso_bem: 5,
      valor_aquisicao: item.valor_unitario,
      id_marca: preBem.marca,
      data_lim_garantia: preBem.inicio_garantia,
      data_fim_garantia: preBem.fim_garantia,
      observacoes: preBem.observacao,
    }
    
    if (this.qtd_max == 1) {
      this.itemService.vinculateSelectedItem();
    }
    this.itemService.createBem(bem).subscribe(bem => {
      this.itemService.fetchSelectedItemBens()  
    });
  }

  clearFields = () => {
    this.form.setValue({
      qtd: 1, 
      marca: '', 
      inicio_garantia: new Date(), 
      fim_garantia: new Date(),
      observacao: ''
    });
  }

  periodValidator: ValidatorFn = 
  (control: AbstractControl): ValidationErrors | null => {
    const i = control.get('inicio_garantia');
    const f = control.get('fim_garantia');
    return  f?.value > i?.value ? null : {invalidPeriod: true};
  }

  qtdValidator: ValidatorFn =
  (control: AbstractControl): ValidationErrors | null => {
    const qtd = control.get('qtd');
    return qtd?.value <= this.qtd_max ? null : {invalidQtd: true};
  }

  private _create_form() {
    this.form = new FormGroup({
      qtd: new FormControl(1, [
          Validators.required, 
          Validators.min(1),]),
      marca: new FormControl(null, [
          Validators.required]),
      inicio_garantia: new FormControl('', [
          Validators.required]),
      fim_garantia: new FormControl('', [
          Validators.required]),
      observacao: new FormControl('')
    }, {validators: [this.periodValidator, this.qtdValidator]});
  }

  private _set_qtd_max(item: any) {
    if (item) {
      this.qtd_max = item.qtd - this.itemService.bens.length;
    } else {
      this.qtd_max = 0;
    }
  }

  private get_current_date() {
    let date = new Date();
    const offset = date.getTimezoneOffset()
    date = new Date(date.getTime() - (offset*60*1000))
    return date.toISOString().split('T')[0]
  }
}
