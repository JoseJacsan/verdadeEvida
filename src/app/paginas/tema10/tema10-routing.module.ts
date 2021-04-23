import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tema10Page } from './tema10.page';

const routes: Routes = [
  {
    path: '',
    component: Tema10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema10PageRoutingModule {}
