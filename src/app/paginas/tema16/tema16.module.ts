import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tema16PageRoutingModule } from './tema16-routing.module';

import { Tema16Page } from './tema16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tema16PageRoutingModule
  ],
  declarations: [Tema16Page]
})
export class Tema16PageModule {}
