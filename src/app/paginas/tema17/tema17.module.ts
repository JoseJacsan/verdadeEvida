import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tema17PageRoutingModule } from './tema17-routing.module';

import { Tema17Page } from './tema17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tema17PageRoutingModule
  ],
  declarations: [Tema17Page]
})
export class Tema17PageModule {}
