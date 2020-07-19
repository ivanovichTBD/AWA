import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerActividadesPage } from './ver-actividades.page';

const routes: Routes = [
  {
    path: '',
    component: VerActividadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerActividadesPageRoutingModule {}
