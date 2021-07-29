import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tema17Page } from './tema17.page';

const routes: Routes = [
  {
    path: '',
    component: Tema17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema17PageRoutingModule {}
