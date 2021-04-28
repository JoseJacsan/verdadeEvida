import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tema11PageRoutingModule } from './tema11-routing.module';

import { Tema11Page } from './tema11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tema11PageRoutingModule
  ],
  declarations: [Tema11Page]
})
export class Tema11PageModule {}
