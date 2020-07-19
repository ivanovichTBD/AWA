import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscribirTextoPageRoutingModule } from './escribir-texto-routing.module';

import { EscribirTextoPage } from './escribir-texto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscribirTextoPageRoutingModule
  ],
  declarations: [EscribirTextoPage]
})
export class EscribirTextoPageModule {}
