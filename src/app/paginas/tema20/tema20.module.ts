import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tema20PageRoutingModule } from './tema20-routing.module';

import { Tema20Page } from './tema20.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tema20PageRoutingModule
  ],
  declarations: [Tema20Page]
})
export class Tema20PageModule {}
