import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';


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

  constructor(public api: ApiService, public router: Router) { }

  ngOnInit() {
    this.carregarLocais();
  }

  public carregarLocais(): any {
    this.api.getLocais().subscribe(response => {
      this.locais = response['results'];
    })
  }

  public acessarLocal(id) {
    this.router.navigate(['locais', id]);
  }

}
