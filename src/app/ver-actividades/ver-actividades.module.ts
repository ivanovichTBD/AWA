import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerActividadesPageRoutingModule } from './ver-actividades-routing.module';

import { VerActividadesPage } from './ver-actividades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerActividadesPageRoutingModule
  ],
  declarations: [VerActividadesPage]
})
export class VerActividadesPageModule {}
