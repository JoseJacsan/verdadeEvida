import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tema11Page } from './tema11.page';

const routes: Routes = [
  {
    path: '',
    component: Tema11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema11PageRoutingModule {}
