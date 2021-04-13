import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tema2PageRoutingModule } from './tema2-routing.module';

import { Tema2Page } from './tema2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tema2PageRoutingModule
  ],
  declarations: [Tema2Page]
})
export class Tema2PageModule {}
