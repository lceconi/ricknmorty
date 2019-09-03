import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/inicial/inicial.module#InicialComponentModule' },
  { path: 'locais', loadChildren: './pages/locais/locais.module#LocaisComponentModule'},
  { path: 'locais/:id', loadChildren: './pages/local-detalhe/local-detalhe.module#LocalDetalheComponentModule'},
  { path: 'personagens', loadChildren: './pages/personagens/personagens.module#PersonagensComponentModule'},
  { path: 'personagens/:id', loadChildren: './pages/personagem-detalhe/personagem-detalhe.module#PersonagemDetalheComponentModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
