import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'paginacao',
  templateUrl: './paginacao.component.html'
})
export class PaginacaoComponent implements OnInit {

  @Input('linkAnterior') linkAnterior: any;
  @Input('linkProxima') linkProxima: any;
  @Output() paginaAnterior = new EventEmitter();
  @Output() paginaProxima = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public emitPaginaAnterior(): any {
    this.paginaAnterior.emit(this.linkAnterior);
  }

  public emitPaginaProxima(): any {
    this.paginaProxima.emit(this.linkProxima);
  }

}
