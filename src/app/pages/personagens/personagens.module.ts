import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CardsModule, IconsModule } from 'angular-bootstrap-md';

import { PersonagensComponent } from './personagens.component';
import { CardPersonagemComponentModule } from 'src/app/components/card-personagem/card-personagem.module';

const routes: Routes = [
  {
    path: '',
    component: PersonagensComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardsModule,
    IconsModule,
    CardPersonagemComponentModule
  ],
  declarations: [
    PersonagensComponent
  ]
})
export class PersonagensComponentModule {}