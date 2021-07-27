import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tema14PageRoutingModule } from './tema14-routing.module';

import { Tema14Page } from './tema14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tema14PageRoutingModule
  ],
  declarations: [Tema14Page]
})
export class Tema14PageModule {}
