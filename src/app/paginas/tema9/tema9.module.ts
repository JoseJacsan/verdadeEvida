import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tema9PageRoutingModule } from './tema9-routing.module';

import { Tema9Page } from './tema9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tema9PageRoutingModule
  ],
  declarations: [Tema9Page]
})
export class Tema9PageModule {}
