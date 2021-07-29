import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tema21Page } from './tema21.page';

const routes: Routes = [
  {
    path: '',
    component: Tema21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema21PageRoutingModule {}
