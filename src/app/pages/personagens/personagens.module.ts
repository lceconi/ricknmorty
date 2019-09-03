import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CardsModule, InputsModule } from 'angular-bootstrap-md';

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
    InputsModule,
    CardPersonagemComponentModule
  ],
  declarations: [
    PersonagensComponent
  ]
})
export class PersonagensComponentModule {}