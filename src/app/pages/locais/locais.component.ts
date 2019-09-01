import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-locais',
  templateUrl: './locais.component.html',
  styleUrls: ['./locais.component.scss']
})
export class LocaisComponent implements OnInit {

  public locais: any
  public itensCabecalho = [
    '#',
    'Nome',
    'Tipo',
    'Dimensão',
    'Moradores'
  ]

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.carregarLocais();
  }

  public carregarLocais(): any {
    this.api.getLocais().subscribe(response => {
      this.locais = response['results'];
    })
  }

}
