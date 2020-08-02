import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesorTextoPageRoutingModule } from './profesor-texto-routing.module';

import { ProfesorTextoPage } from './profesor-texto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesorTextoPageRoutingModule
  ],
  declarations: [ProfesorTextoPage]
})
export class ProfesorTextoPageModule {}
