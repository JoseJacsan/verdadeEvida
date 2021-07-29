import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tema18PageRoutingModule } from './tema18-routing.module';

import { Tema18Page } from './tema18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tema18PageRoutingModule
  ],
  declarations: [Tema18Page]
})
export class Tema18PageModule {}
