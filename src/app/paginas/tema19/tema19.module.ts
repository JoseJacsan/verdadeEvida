import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tema19PageRoutingModule } from './tema19-routing.module';

import { Tema19Page } from './tema19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tema19PageRoutingModule
  ],
  declarations: [Tema19Page]
})
export class Tema19PageModule {}
