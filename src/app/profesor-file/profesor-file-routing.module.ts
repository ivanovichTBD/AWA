import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorFilePage } from './profesor-file.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesorFilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorFilePageRoutingModule {}
