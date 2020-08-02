import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmEstudianteProfesorPageRoutingModule } from './adm-estudiante-profesor-routing.module';

import { AdmEstudianteProfesorPage } from './adm-estudiante-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmEstudianteProfesorPageRoutingModule
  ],
  declarations: [AdmEstudianteProfesorPage]
})
export class AdmEstudianteProfesorPageModule {}
