import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tema5Page } from './tema5.page';

const routes: Routes = [
  {
    path: '',
    component: Tema5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema5PageRoutingModule {}
