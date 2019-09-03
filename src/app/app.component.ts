import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public paginas: any = [
    {
      'nome': 'Locais',
      'url': '/locais'
    },
    {
      'nome': 'Personagens',
      'url': '/personagens'
    }
  ]

  public isActive(url): boolean {
    return window.location.href.indexOf(url) > 0;
  }
}
