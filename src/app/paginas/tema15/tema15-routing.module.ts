import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tema15Page } from './tema15.page';

const routes: Routes = [
  {
    path: '',
    component: Tema15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema15PageRoutingModule {}
