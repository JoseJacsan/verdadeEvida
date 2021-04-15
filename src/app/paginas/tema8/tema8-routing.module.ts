import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tema8Page } from './tema8.page';

const routes: Routes = [
  {
    path: '',
    component: Tema8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema8PageRoutingModule {}
