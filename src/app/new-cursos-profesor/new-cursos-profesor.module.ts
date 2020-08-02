import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewCursosProfesorPageRoutingModule } from './new-cursos-profesor-routing.module';

import { NewCursosProfesorPage } from './new-cursos-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewCursosProfesorPageRoutingModule
  ],
  declarations: [NewCursosProfesorPage]
})
export class NewCursosProfesorPageModule {}
