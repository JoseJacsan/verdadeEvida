import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tema6PageRoutingModule } from './tema6-routing.module';

import { Tema6Page } from './tema6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tema6PageRoutingModule
  ],
  declarations: [Tema6Page]
})
export class Tema6PageModule {}
