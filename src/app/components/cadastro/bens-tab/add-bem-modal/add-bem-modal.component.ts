import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, 
  AbstractControl, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-add-bem-modal',
  templateUrl: './add-bem-modal.component.html',
  styleUrls: ['./add-bem-modal.component.scss'],
  host: {'class': 'modal fade'}
})
export class AddBemModalComponent implements OnInit {

  @Input() parentUpdate!: Function;
  @Input() mode!: 'buffer' | 'noBuffer';

  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      qtd: new FormControl(1, [
          Validators.required, 
          Validators.min(1)]),
      marca: new FormControl('', [
          Validators.required, 
          Validators.minLength(2)]),
      inicio_garantia: new FormControl(new Date(), [
          Validators.required]),
      fim_garantia: new FormControl(new Date(), [
          Validators.required]),
    }, {validators: this.periodValidator});
  }

  createItem() {
  }

  clearFields = () => {
    this.form.setValue({
      qtd: 1, 
      marca: '', 
      inicio_garantia: new Date(), 
      fim_garantia: new Date()
    });
  }


  periodValidator: ValidatorFn = 
  (control: AbstractControl): ValidationErrors | null => {
    const i = control.get('inicio_garantia');
    const f = control.get('fim_garantia');
    return  f?.value > i?.value ? null : {invalidPeriod: true};
  }

  private _create() {
  }

}
