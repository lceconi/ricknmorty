import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personagem-detalhe',
  templateUrl: './personagem-detalhe.component.html'
})
export class PersonagemDetalheComponent implements OnInit {

  public personagem_id: string;
  public personagem: any;
  public episodios: any;
  public itensCabecalho = ['#', 'Nome', 'Data de Exibição', 'Episódio']

  constructor(
    public route: ActivatedRoute, 
    public router: Router,
    public api: ApiService) { }

  ngOnInit() {
    this.personagem_id = this.route.snapshot.paramMap.get('id');
    this.carregarPersonagem();
  }

  public carregarPersonagem(): any {
    this.api.getDados('character', this.personagem_id).subscribe(response => {
      this.personagem = response;
      this.carregaEpisodios(response['episode']);
    });
  }

  public carregaEpisodios(urlEpisodes) {
    let episodios_ids = [];
    for (let i in urlEpisodes) {
      let e_id = urlEpisodes[i].split(/[/ ]+/).pop();
      episodios_ids.push(e_id);      
    }
    this.api.getDadosArray('episode', episodios_ids).subscribe(response => {
      this.episodios = response;
    });
  }

}
