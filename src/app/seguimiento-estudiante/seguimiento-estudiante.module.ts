import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguimientoEstudiantePageRoutingModule } from './seguimiento-estudiante-routing.module';

import { SeguimientoEstudiantePage } from './seguimiento-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguimientoEstudiantePageRoutingModule
  ],
  declarations: [SeguimientoEstudiantePage]
})
export class SeguimientoEstudiantePageModule {}
