import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/inicial/inicial.module#InicialComponentModule' },
  { path: 'locais', loadChildren: './pages/locais/locais.module#LocaisComponentModule'},
  { path: 'locais/:id', loadChildren: './pages/local-detalhe/local-detalhe.module#LocalDetalheComponentModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
