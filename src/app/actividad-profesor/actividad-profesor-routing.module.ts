import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadProfesorPage } from './actividad-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadProfesorPageRoutingModule {}
