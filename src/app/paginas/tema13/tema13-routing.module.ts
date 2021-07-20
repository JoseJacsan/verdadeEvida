import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tema13Page } from './tema13.page';

const routes: Routes = [
  {
    path: '',
    component: Tema13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema13PageRoutingModule {}
