import { DetailService } from 'src/app/services/detail.service';
import { Component, OnInit } from '@angular/core';
import { ItemNotaService } from './../../../services/item-nota.service';
import { Bem } from 'src/app/shared/Bem.model';
import { ItemNotaFiscal } from 'src/app/shared/ItemNotaFiscal.model';


@Component({
  selector: 'app-bens-tab',
  templateUrl: './bens-tab.component.html',
  styleUrls: ['./bens-tab.component.scss']
})
export class BensTabComponent implements OnInit {

  bens: Bem[] = [];
  selectedItem!: ItemNotaFiscal;

  constructor(private itemService: ItemNotaService,
              private detailService: DetailService) {
      itemService.selectedItemSubject.subscribe(item => {
          this.selectedItem = <ItemNotaFiscal>item;
      })
    itemService.bensSubject.subscribe(bens => {
      this.bens = bens;
    });
  }

  ngOnInit(): void {
  }

  selectBem(bem: Bem) {
    this.detailService.selectedBem = bem;
  }
}
