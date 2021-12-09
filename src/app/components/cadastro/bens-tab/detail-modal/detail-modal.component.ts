import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
  host: {'class': 'modal fade'}
})
export class DetailModalComponent implements OnInit {

  @Input() mode!: 'buffer' | 'noBuffer';
  @Input() parentUpdate!: Function;
  detail = {
    marca: 'generica', 
    estado: {estado_bem: 'Bom', descricao: 'Está sem danos.'},
    situacao: {situacao_bem: 'Em uso', 
               descricao: 'Funcionando bem.'},
  }

  totalValue!: number;

  constructor() {}

  ngOnInit(): void {
  }

  
}
