import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaEstudiantesFiPage } from './lista-estudiantes-fi.page';

const routes: Routes = [
  {
    path: '',
    component: ListaEstudiantesFiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaEstudiantesFiPageRoutingModule {}
