import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tema9Page } from './tema9.page';

const routes: Routes = [
  {
    path: '',
    component: Tema9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema9PageRoutingModule {}
