import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HacerActividadesPage } from './hacer-actividades.page';

const routes: Routes = [
  {
    path: '',
    component: HacerActividadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HacerActividadesPageRoutingModule {}
