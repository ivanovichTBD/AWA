import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguimientoEstudiantePage } from './seguimiento-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: SeguimientoEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguimientoEstudiantePageRoutingModule {}
