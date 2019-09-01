import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CardsModule, IconsModule, TableModule } from 'angular-bootstrap-md';

import { LocaisComponent } from './locais.component';
import { TableComponent } from '../../components/table/table.component';

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
    CardsModule,
    IconsModule,
    TableModule,
  ],
  entryComponents: [
    TableComponent
  ],
  declarations: [
    LocaisComponent,
    TableComponent
  ]
})
export class LocaisComponentModule {}