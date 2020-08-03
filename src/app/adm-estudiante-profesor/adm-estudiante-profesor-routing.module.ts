import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmEstudianteProfesorPage } from './adm-estudiante-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: AdmEstudianteProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmEstudianteProfesorPageRoutingModule {}
