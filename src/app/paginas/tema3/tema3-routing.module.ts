import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tema3Page } from './tema3.page';

const routes: Routes = [
  {
    path: '',
    component: Tema3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema3PageRoutingModule {}
