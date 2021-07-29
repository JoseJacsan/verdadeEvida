import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tema19Page } from './tema19.page';

const routes: Routes = [
  {
    path: '',
    component: Tema19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema19PageRoutingModule {}
