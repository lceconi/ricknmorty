import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { TableComponent } from './table.component';

import { TableModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [
    TableComponent
  ],
  declarations: [
    TableComponent
  ]
})
export class TableComponentModule {}