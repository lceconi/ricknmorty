import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html'
})
export class PersonagensComponent implements OnInit {

  public personagens: any;

  constructor(public api: ApiService, public router: Router) { }

  ngOnInit() {
    this.carregarPersonagens();
  }

  public carregarPersonagens(): any {
    this.api.getDados('character').subscribe(response => {
      this.personagens = response['results'];
    })
  }

  public acessarPersonagem(id) {
    this.router.navigate(['personagens', id]);
  }

}
