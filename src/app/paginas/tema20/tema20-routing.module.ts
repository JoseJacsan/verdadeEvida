import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tema20Page } from './tema20.page';

const routes: Routes = [
  {
    path: '',
    component: Tema20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema20PageRoutingModule {}
