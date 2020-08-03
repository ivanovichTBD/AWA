import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorTextoPage } from './profesor-texto.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesorTextoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorTextoPageRoutingModule {}
