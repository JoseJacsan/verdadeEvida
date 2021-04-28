import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tema12Page } from './tema12.page';

const routes: Routes = [
  {
    path: '',
    component: Tema12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema12PageRoutingModule {}
