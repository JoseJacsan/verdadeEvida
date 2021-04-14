import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tema4Page } from './tema4.page';

const routes: Routes = [
  {
    path: '',
    component: Tema4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema4PageRoutingModule {}
