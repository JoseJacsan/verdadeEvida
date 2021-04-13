import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tema1PageRoutingModule } from './tema1-routing.module';

import { Tema1Page } from './tema1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tema1PageRoutingModule
  ],
  declarations: [Tema1Page]
})
export class Tema1PageModule {}
