import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewCursosProfesorPage } from './new-cursos-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: NewCursosProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewCursosProfesorPageRoutingModule {}
