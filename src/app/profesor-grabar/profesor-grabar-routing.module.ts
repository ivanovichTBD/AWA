import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorGrabarPage } from './profesor-grabar.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesorGrabarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorGrabarPageRoutingModule {}
