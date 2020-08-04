import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEstudiantesMaPageRoutingModule } from './lista-estudiantes-ma-routing.module';

import { ListaEstudiantesMaPage } from './lista-estudiantes-ma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaEstudiantesMaPageRoutingModule
  ],
  declarations: [ListaEstudiantesMaPage]
})
export class ListaEstudiantesMaPageModule {}
