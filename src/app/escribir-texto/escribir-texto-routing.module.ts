import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscribirTextoPage } from './escribir-texto.page';

const routes: Routes = [
  {
    path: '',
    component: EscribirTextoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscribirTextoPageRoutingModule {}
