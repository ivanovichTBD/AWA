import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEstudiantesFiPageRoutingModule } from './lista-estudiantes-fi-routing.module';

import { ListaEstudiantesFiPage } from './lista-estudiantes-fi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaEstudiantesFiPageRoutingModule
  ],
  declarations: [ListaEstudiantesFiPage]
})
export class ListaEstudiantesFiPageModule {}
