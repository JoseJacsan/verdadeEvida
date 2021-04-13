import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tema2Page } from './tema2.page';

const routes: Routes = [
  {
    path: '',
    component: Tema2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema2PageRoutingModule {}
