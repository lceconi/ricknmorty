import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tabela',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('itens') itens: any;
  @Input('dados') dados: any;
  @Output() acessarDetalhe = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public emitAcessarDetalhe(id: string): any {
    this.acessarDetalhe.emit(id);
  }

}
