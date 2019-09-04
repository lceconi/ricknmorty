import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tabela',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  @Input('itens') itens: any;
  @Input('dados') dados: any;
  @Input('detalhes') detalhes: boolean;
  @Output() acessarDetalhe = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public emitAcessarDetalhe(id: string): any {
    this.acessarDetalhe.emit(id);
  }

}
