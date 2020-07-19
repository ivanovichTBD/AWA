import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrabarAudioPage } from './grabar-audio.page';

const routes: Routes = [
  {
    path: '',
    component: GrabarAudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrabarAudioPageRoutingModule {}
