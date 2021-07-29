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
  },
  {
    path: 'tema4',
    loadChildren: () => import('./paginas/tema4/tema4.module').then( m => m.Tema4PageModule)
  },
  {
    path: 'tema5',
    loadChildren: () => import('./paginas/tema5/tema5.module').then( m => m.Tema5PageModule)
  },
  {
    path: 'tema6',
    loadChildren: () => import('./paginas/tema6/tema6.module').then( m => m.Tema6PageModule)
  },
  {
    path: 'tema7',
    loadChildren: () => import('./paginas/tema7/tema7.module').then( m => m.Tema7PageModule)
  },
  {
    path: 'tema8',
    loadChildren: () => import('./paginas/tema8/tema8.module').then( m => m.Tema8PageModule)
  },
  {
    path: 'tema9',
    loadChildren: () => import('./paginas/tema9/tema9.module').then( m => m.Tema9PageModule)
  },
  {
    path: 'tema10',
    loadChildren: () => import('./paginas/tema10/tema10.module').then( m => m.Tema10PageModule)
  },
  {
    path: 'tema11',
    loadChildren: () => import('./paginas/tema11/tema11.module').then( m => m.Tema11PageModule)
  },
  {
    path: 'tema12',
    loadChildren: () => import('./paginas/tema12/tema12.module').then( m => m.Tema12PageModule)
  },
  {
    path: 'tema13',
    loadChildren: () => import('./paginas/tema13/tema13.module').then( m => m.Tema13PageModule)
  },
  {
    path: 'tema14',
    loadChildren: () => import('./paginas/tema14/tema14.module').then( m => m.Tema14PageModule)
  },
  {
    path: 'tema15',
    loadChildren: () => import('./paginas/tema15/tema15.module').then( m => m.Tema15PageModule)
  },
  {
    path: 'tema16',
    loadChildren: () => import('./paginas/tema16/tema16.module').then( m => m.Tema16PageModule)
  },
  {
    path: 'tema17',
    loadChildren: () => import('./paginas/tema17/tema17.module').then( m => m.Tema17PageModule)
  },
  {
    path: 'tema18',
    loadChildren: () => import('./paginas/tema18/tema18.module').then( m => m.Tema18PageModule)
  },
  {
    path: 'tema19',
    loadChildren: () => import('./paginas/tema19/tema19.module').then( m => m.Tema19PageModule)
  },
  {
    path: 'tema20',
    loadChildren: () => import('./paginas/tema20/tema20.module').then( m => m.Tema20PageModule)
  },
  {
    path: 'tema21',
    loadChildren: () => import('./paginas/tema21/tema21.module').then( m => m.Tema21PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
