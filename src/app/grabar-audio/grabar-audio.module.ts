import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrabarAudioPageRoutingModule } from './grabar-audio-routing.module';

import { GrabarAudioPage } from './grabar-audio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrabarAudioPageRoutingModule
  ],
  declarations: [GrabarAudioPage]
})
export class GrabarAudioPageModule {}
