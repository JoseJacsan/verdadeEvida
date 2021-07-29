import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tema21PageRoutingModule } from './tema21-routing.module';

import { Tema21Page } from './tema21.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tema21PageRoutingModule
  ],
  declarations: [Tema21Page]
})
export class Tema21PageModule {}
