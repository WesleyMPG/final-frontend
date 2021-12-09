import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-geral-tab',
  templateUrl: './geral-tab.component.html',
  styleUrls: ['./geral-tab.component.scss']
})
export class GeralTabComponent implements OnInit {

  formBem!: FormGroup;
  notasFiscais = [{title: 'one', content: 1}, {title: 'two', content:2}];

  constructor() { }

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm(): void {
      this.formBem = new FormGroup({
        fornecedor: new FormControl('', [Validators.required,
          Validators.minLength(2)]),
        nota: new FormControl('----', [Validators.required]),
      })
  }

}
