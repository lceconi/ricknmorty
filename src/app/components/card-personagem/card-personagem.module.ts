import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CardPersonagemComponent } from './card-personagem.component';

import { CardsModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    CommonModule,
    CardsModule
  ],
  exports: [
    CardPersonagemComponent
  ],
  declarations: [
    CardPersonagemComponent
  ]
})
export class CardPersonagemComponentModule {}