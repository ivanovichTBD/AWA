import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadProfesorPageRoutingModule } from './actividad-profesor-routing.module';

import { ActividadProfesorPage } from './actividad-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadProfesorPageRoutingModule
  ],
  declarations: [ActividadProfesorPage]
})
export class ActividadProfesorPageModule {}
