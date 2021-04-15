import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tema7PageRoutingModule } from './tema7-routing.module';

import { Tema7Page } from './tema7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tema7PageRoutingModule
  ],
  declarations: [Tema7Page]
})
export class Tema7PageModule {}
