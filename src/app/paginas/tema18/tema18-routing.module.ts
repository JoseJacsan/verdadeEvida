import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tema18Page } from './tema18.page';

const routes: Routes = [
  {
    path: '',
    component: Tema18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema18PageRoutingModule {}
