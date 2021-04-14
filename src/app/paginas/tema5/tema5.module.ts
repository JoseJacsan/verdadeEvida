import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tema5PageRoutingModule } from './tema5-routing.module';

import { Tema5Page } from './tema5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tema5PageRoutingModule
  ],
  declarations: [Tema5Page]
})
export class Tema5PageModule {}
