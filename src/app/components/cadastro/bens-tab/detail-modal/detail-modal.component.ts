import { Situacao } from './../../../../shared/Situacao.model';
import { Marca } from 'src/app/shared/Marca.model';
import { Estado } from './../../../../shared/Estado.model';
import { Bem } from 'src/app/shared/Bem.model';
import { DetailService } from 'src/app/services/detail.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
  host: {'class': 'modal fade'}
})
export class DetailModalComponent implements OnInit {

  marca: any = {marca: ''};
  estado: any = {estado_bem: '', descricao: ''};
  situacao: any = {id_situacao_uso_bem: '', descricao: ''};

  constructor(private detailService: DetailService) {
    detailService.selectedBemSubject.subscribe(bem => {
      if (bem) {
        this.loadDetails(bem);
      }
    });
  }

  ngOnInit(): void {
  }

  loadDetails(bem: Bem): void {
    this.detailService.getEstadoById(bem.id_estado_bem)
      .subscribe(estado => this.estado = estado);
    this.detailService.getMarcaById(bem.id_marca)
      .subscribe(marca => this.marca = marca);
    this.detailService.getSituacaoById(bem.id_situacao_uso_bem)
      .subscribe(situacao => this.situacao = situacao);
  }

  
  
}
