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

  constructor(public api: ApiService, public router: Router) { }

  ngOnInit() {
    this.carregarPersonagens();
  }

  public carregarPersonagens(): any {
    this.api.getDados('character').subscribe(response => {
      this.personagens = response['results'];
      this.listaPersonagensFiltrados = this.personagens;
    })
  }

  public acessarPersonagem(id) {
    this.router.navigate(['personagens', id]);
  }

  public pesquisarPersonagem(event) {
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

}