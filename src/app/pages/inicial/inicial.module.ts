import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { InicialComponent } from './inicial.component';
import { CardsModule } from 'angular-bootstrap-md';

const routes: Routes = [
  {
    path: '',
    component: InicialComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardsModule
  ],
  declarations: [InicialComponent]
})
export class InicialComponentModule {}