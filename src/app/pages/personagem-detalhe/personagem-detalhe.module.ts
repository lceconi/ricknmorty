import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CardsModule, IconsModule, TableModule } from 'angular-bootstrap-md';

import { PersonagemDetalheComponent } from './personagem-detalhe.component';
import { TableComponentModule } from 'src/app/components/table/table.module';

const routes: Routes = [
  {
    path: '',
    component: PersonagemDetalheComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardsModule,
    IconsModule,
    TableModule,
    TableComponentModule
  ],
  declarations: [
    PersonagemDetalheComponent
  ]
})
export class PersonagemDetalheComponentModule {}