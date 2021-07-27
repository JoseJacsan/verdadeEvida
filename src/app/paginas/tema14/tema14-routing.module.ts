import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tema14Page } from './tema14.page';

const routes: Routes = [
  {
    path: '',
    component: Tema14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema14PageRoutingModule {}
