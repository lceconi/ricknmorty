import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-local-detalhe',
  templateUrl: './local-detalhe.component.html',
  styleUrls: ['./local-detalhe.component.scss']
})
export class LocalDetalheComponent implements OnInit {

  public local_id: string;
  public local: any;
  public personagens = []

  constructor(
    public route: ActivatedRoute, 
    public router: Router,
    public api: ApiService) { }

  ngOnInit() {
    this.local_id = this.route.snapshot.paramMap.get('id');
    this.carregarLocal();
  }

  public carregarLocal(): any {
    this.api.getLocais(this.local_id).subscribe(response => {
      this.local = response;
      this.carregaPersonagens(response['residents'])
    });
  }

  public carregaPersonagens(urlResidents) {
    for (let i in urlResidents) {
      this.api.getPersonagem(urlResidents[i]).subscribe(response => {
        this.personagens.push(response);
      });
    }
  }

}
