import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'tema1',
    loadChildren: () => import('./paginas/tema1/tema1.module').then( m => m.Tema1PageModule)
  },
  {
    path: 'tema2',
    loadChildren: () => import('./paginas/tema2/tema2.module').then( m => m.Tema2PageModule)
  },
  {
    path: 'tema3',
    loadChildren: () => import('./paginas/tema3/tema3.module').then( m => m.Tema3PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
