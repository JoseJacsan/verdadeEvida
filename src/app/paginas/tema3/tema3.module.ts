import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tema3PageRoutingModule } from './tema3-routing.module';

import { Tema3Page } from './tema3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tema3PageRoutingModule
  ],
  declarations: [Tema3Page]
})
export class Tema3PageModule {}
