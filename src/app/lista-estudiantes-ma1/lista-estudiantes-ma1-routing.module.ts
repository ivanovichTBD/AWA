import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaEstudiantesMa1Page } from './lista-estudiantes-ma1.page';

const routes: Routes = [
  {
    path: '',
    component: ListaEstudiantesMa1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaEstudiantesMa1PageRoutingModule {}
