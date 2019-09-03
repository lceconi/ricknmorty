import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CardsModule, IconsModule, TableModule } from 'angular-bootstrap-md';

import { LocaisComponent } from './locais.component';
import { TableComponentModule } from 'src/app/components/table/table.module';

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
    TableComponentModule,
  ],
  declarations: [
    LocaisComponent,
  ]
})
export class LocaisComponentModule {}