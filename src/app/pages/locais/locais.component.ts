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
  public linkProxima: string;
  public linkAnterior: string;

  constructor(public api: ApiService, public router: Router) { }

  ngOnInit() {
    this.carregarLocais();
  }

  public carregarLocais(page: string = ''): void {
    let slug = 'location';
    if (page) slug = slug + '/?' + page.split(/[? ]+/).pop();
    this.api.getDados(slug).subscribe(response => {
      this.locais = response['results'];
      this.linkProxima = response['info']['next'];
      this.linkAnterior = response['info']['prev'];
      this.listaLocaisFiltrados = this.locais;
    })
  }

  public pesquisarLocal(event): void {
    this.mensagemFiltro = '';
    const valor = event.target.value;

    if (valor.length > 1) {
      let slug = 'location/?name=' + valor;
      this.api.getDados(slug).subscribe(response => {
        this.locais = response['results'];
        this.linkProxima = response['info']['next'];
        this.linkAnterior = response['info']['prev'];
      }, error => {
        this.locais = [];
        this.linkProxima = '';
        this.linkAnterior = '';
        this.mensagemFiltro = 'Nenhum local encontrado.';
      })
    } else {
      this.mensagemFiltro = '';
      this.carregarLocais();      
    }
  }

  public acessarLocal(id): void {
    this.router.navigate(['locais', id]);
  }

  public paginaProxima() {
    this.carregarLocais(this.linkProxima);
  }

  public paginaAnterior() {
    this.carregarLocais(this.linkAnterior);
  }

}
