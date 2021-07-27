import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tema16Page } from './tema16.page';

const routes: Routes = [
  {
    path: '',
    component: Tema16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema16PageRoutingModule {}
