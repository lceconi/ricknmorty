import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { InputsModule } from 'angular-bootstrap-md';

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
    InputsModule,
    CardPersonagemComponentModule
  ],
  declarations: [
    PersonagensComponent
  ]
})
export class PersonagensComponentModule {}