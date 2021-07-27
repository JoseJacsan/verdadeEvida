import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tema15PageRoutingModule } from './tema15-routing.module';

import { Tema15Page } from './tema15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tema15PageRoutingModule
  ],
  declarations: [Tema15Page]
})
export class Tema15PageModule {}
