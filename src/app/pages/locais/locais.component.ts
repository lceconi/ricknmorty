import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-locais',
  templateUrl: './locais.component.html'
})
export class LocaisComponent implements OnInit {

  public titulo: string = 'Locais';
  public locais: any;
  public listaLocaisFiltrados: any = [];
  public mensagemFiltro: string;
  public itensCabecalho = ['#', 'Nome', 'Tipo', 'Dimensão', 'Moradores'];

  constructor(public api: ApiService, public router: Router) { }

  ngOnInit() {
    this.carregarLocais();
  }

  public carregarLocais(): void {
    this.api.getDados('location').subscribe(response => {
      this.locais = response['results'];
      this.listaLocaisFiltrados = this.locais;
    })
  }

  public pesquisarLocal(event): void {
    this.mensagemFiltro = '';
    const valor = event.target.value;

    if (valor.length > 1) {
      this.listaLocaisFiltrados = this.locais.filter(personagem => {
        return personagem.name.toLowerCase().indexOf(valor.toLowerCase()) > -1;
      });
    } else {
      this.mensagemFiltro = '';
      this.listaLocaisFiltrados = this.locais;
      return;
    }

    if (valor && !this.listaLocaisFiltrados.length) {
      this.mensagemFiltro = 'Nenhum local encontrado.';
    }
  }

  public acessarLocal(id): void {
    this.router.navigate(['locais', id]);
  }

}
