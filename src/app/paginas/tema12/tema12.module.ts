import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tema12PageRoutingModule } from './tema12-routing.module';

import { Tema12Page } from './tema12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tema12PageRoutingModule
  ],
  declarations: [Tema12Page]
})
export class Tema12PageModule {}
