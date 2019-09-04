import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html'
})
export class PersonagensComponent implements OnInit {

  public personagens: any;
  public listaPersonagensFiltrados: any = [];
  public mensagemFiltro: string;
  public linkProxima: string;
  public linkAnterior: string;

  constructor(public api: ApiService, public router: Router) { }

  ngOnInit() {
    this.carregarPersonagens();
  }

  public carregarPersonagens(page: string = ''): void {    
    let slug = 'character';
    if (page) slug = slug + '/' + page.split(/[/ ]+/).pop();    
    this.api.getDados(slug).subscribe(response => {
      this.personagens = response['results'];
      this.linkProxima = response['info']['next'];
      this.linkAnterior = response['info']['prev'];
      this.listaPersonagensFiltrados = this.personagens;
    })
  }

  public acessarPersonagem(id): void {
    this.router.navigate(['personagens', id]);
  }

  public pesquisarPersonagem(event): string {
    this.mensagemFiltro = '';
    const valor = event.target.value;

    if (valor.length > 1) {
      this.listaPersonagensFiltrados = this.personagens.filter(personagem => {
        return personagem.name.toLowerCase().indexOf(valor.toLowerCase()) > -1;
      });
    } else {
      this.mensagemFiltro = '';
      this.listaPersonagensFiltrados = this.personagens;
      return;
    }

    if (valor && !this.listaPersonagensFiltrados.length) {
      this.mensagemFiltro = 'Nenhum personagem encontrado.';
    }
  }

  public paginaProxima() {
    this.carregarPersonagens(this.linkProxima);
  }

  public paginaAnterior() {
    this.carregarPersonagens(this.linkAnterior);
  }

}