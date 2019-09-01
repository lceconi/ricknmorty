import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tabela',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('itens') itens: any;
  @Input('dados') dados: any;

  constructor() { }

  ngOnInit() {
  }

}
