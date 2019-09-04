import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { PaginacaoComponent } from './paginacao.component';

import { ButtonsModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule
  ],
  exports: [
    PaginacaoComponent
  ],
  declarations: [
    PaginacaoComponent
  ]
})
export class PaginacaoComponentModule {}