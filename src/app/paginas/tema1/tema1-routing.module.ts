import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tema1Page } from './tema1.page';

const routes: Routes = [
  {
    path: '',
    component: Tema1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema1PageRoutingModule {}
