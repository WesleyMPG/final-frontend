import { Component, OnInit } from '@angular/core';
import { Bem } from 'src/shared/Bem.model';


const b = [{tombamento: 'tb1', qtd: 2, valor_aquisicao: 10}]

@Component({
  selector: 'app-bens-tab',
  templateUrl: './bens-tab.component.html',
  styleUrls: ['./bens-tab.component.scss']
})
export class BensTabComponent implements OnInit {

  bens = b;
  selected?: Bem;

  constructor() { }

  ngOnInit(): void {
  }

  selectBem(bem: any) {
    this.selected = bem;
  }
}
