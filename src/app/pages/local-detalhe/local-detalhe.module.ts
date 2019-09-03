import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CardsModule, IconsModule, TableModule } from 'angular-bootstrap-md';

import { LocalDetalheComponent } from './local-detalhe.component';
import { CardPersonagemComponentModule } from 'src/app/components/card-personagem/card-personagem.module';

const routes: Routes = [
  {
    path: '',
    component: LocalDetalheComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardsModule,
    IconsModule,
    TableModule,
    CardPersonagemComponentModule
  ],
  declarations: [
    LocalDetalheComponent,
  ]
})
export class LocalDetalheComponentModule {}