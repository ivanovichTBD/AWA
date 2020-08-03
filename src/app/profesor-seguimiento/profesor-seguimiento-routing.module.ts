import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorSeguimientoPage } from './profesor-seguimiento.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesorSeguimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorSeguimientoPageRoutingModule {}
