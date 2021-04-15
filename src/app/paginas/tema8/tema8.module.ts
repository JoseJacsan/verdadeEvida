import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tema8PageRoutingModule } from './tema8-routing.module';

import { Tema8Page } from './tema8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tema8PageRoutingModule
  ],
  declarations: [Tema8Page]
})
export class Tema8PageModule {}
