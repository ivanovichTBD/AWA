import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEstudiantesMa1PageRoutingModule } from './lista-estudiantes-ma1-routing.module';

import { ListaEstudiantesMa1Page } from './lista-estudiantes-ma1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaEstudiantesMa1PageRoutingModule
  ],
  declarations: [ListaEstudiantesMa1Page]
})
export class ListaEstudiantesMa1PageModule {}
