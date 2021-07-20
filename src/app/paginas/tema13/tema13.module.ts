import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tema13PageRoutingModule } from './tema13-routing.module';

import { Tema13Page } from './tema13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tema13PageRoutingModule
  ],
  declarations: [Tema13Page]
})
export class Tema13PageModule {}
