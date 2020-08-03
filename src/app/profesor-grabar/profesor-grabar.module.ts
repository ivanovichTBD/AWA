import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesorGrabarPageRoutingModule } from './profesor-grabar-routing.module';

import { ProfesorGrabarPage } from './profesor-grabar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesorGrabarPageRoutingModule
  ],
  declarations: [ProfesorGrabarPage]
})
export class ProfesorGrabarPageModule {}
