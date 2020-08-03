import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesorSeguimientoPageRoutingModule } from './profesor-seguimiento-routing.module';

import { ProfesorSeguimientoPage } from './profesor-seguimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesorSeguimientoPageRoutingModule
  ],
  declarations: [ProfesorSeguimientoPage]
})
export class ProfesorSeguimientoPageModule {}
