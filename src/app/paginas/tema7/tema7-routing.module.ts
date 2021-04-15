import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tema7Page } from './tema7.page';

const routes: Routes = [
  {
    path: '',
    component: Tema7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema7PageRoutingModule {}
