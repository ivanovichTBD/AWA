import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesorFilePageRoutingModule } from './profesor-file-routing.module';

import { ProfesorFilePage } from './profesor-file.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesorFilePageRoutingModule
  ],
  declarations: [ProfesorFilePage]
})
export class ProfesorFilePageModule {}
