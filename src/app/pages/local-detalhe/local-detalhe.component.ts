import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-local-detalhe',
  templateUrl: './local-detalhe.component.html',
})
export class LocalDetalheComponent implements OnInit {

  public local_id: string;
  public local: any;
  public listaLocaisFiltrados: any = [];
  public personagens: any;
  public mensagemFiltro: string;

  constructor(
    public route: ActivatedRoute, 
    public router: Router,
    public api: ApiService) { }

  ngOnInit() {
    this.local_id = this.route.snapshot.paramMap.get('id');
    this.carregarLocal();
  }

  public carregarLocal(): void {
    this.api.getDados('location', this.local_id).subscribe(response => {
      this.local = response;
      if (response['residents'].length > 0) {
        this.carregaPersonagens(response['residents']);
      }
    });
  }

  public carregaPersonagens(urlResidents): void {
    let personagens_ids = [];
    for (let i in urlResidents) {
      let p_id = urlResidents[i].split(/[/ ]+/).pop();
      personagens_ids.push(p_id);      
    }
    this.api.getDadosArray('character', personagens_ids).subscribe(response => {
      this.personagens = response;
    });
  }

  public acessarPersonagem(id): void {
    this.router.navigate(['personagens', id]);
  }

}
