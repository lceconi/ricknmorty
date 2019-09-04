import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { InputsModule } from 'angular-bootstrap-md';

import { LocaisComponent } from './locais.component';
import { TableComponentModule } from 'src/app/components/table/table.module';
import { PaginacaoComponentModule } from 'src/app/components/paginacao/paginacao.module';

const routes: Routes = [
  {
    path: '',
    component: LocaisComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InputsModule,
    TableComponentModule,
    PaginacaoComponentModule
  ],
  declarations: [
    LocaisComponent,
  ]
})
export class LocaisComponentModule {}