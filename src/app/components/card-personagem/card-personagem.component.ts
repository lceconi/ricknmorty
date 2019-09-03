import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card-personagem',
  templateUrl: './card-personagem.component.html',
  styleUrls: ['./card-personagem.component.scss']
})
export class CardPersonagemComponent implements OnInit {

  @Input('item') item: any;
  @Output() acessarDetalhe = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public emitAcessarDetalhe(id: string): any {
    this.acessarDetalhe.emit(id);
  }

}
