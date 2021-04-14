import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tema4PageRoutingModule } from './tema4-routing.module';

import { Tema4Page } from './tema4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tema4PageRoutingModule
  ],
  declarations: [Tema4Page]
})
export class Tema4PageModule {}
