import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tema6Page } from './tema6.page';

const routes: Routes = [
  {
    path: '',
    component: Tema6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema6PageRoutingModule {}
