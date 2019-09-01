import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/inicial/inicial.module#InicialComponentModule' },
  { path: 'locais', loadChildren: './pages/locais/locais.module#LocaisComponentModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
