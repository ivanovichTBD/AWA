import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HacerActividadesPageRoutingModule } from './hacer-actividades-routing.module';

import { HacerActividadesPage } from './hacer-actividades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HacerActividadesPageRoutingModule
  ],
  declarations: [HacerActividadesPage]
})
export class HacerActividadesPageModule {}
