import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaEstudiantesMaPage } from './lista-estudiantes-ma.page';

const routes: Routes = [
  {
    path: '',
    component: ListaEstudiantesMaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaEstudiantesMaPageRoutingModule {}
