import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Tema 1', url: '/tema1', icon: 'book' },
    { title: 'Tema 2', url: '/tema2', icon: 'book' },
    { title: 'Tema 3', url: '/tema3', icon: 'book' },
    { title: 'Tema 4', url: '/tema4', icon: 'book' },
    { title: 'Tema 5', url: '/tema5', icon: 'book' },
    { title: 'Tema 6', url: '/tema6', icon: 'book' },
    { title: 'Tema 7', url: '/tema7', icon: 'book' },
    { title: 'Tema 8', url: '/tema8', icon: 'book' },
    { title: 'Tema 9', url: '/tema9', icon: 'book' },
    { title: 'Tema 10', url: '/tema10', icon: 'book' },
    { title: 'Tema 11', url: '/tema11', icon: 'book' },
    { title: 'Tema 12', url: '/tema12', icon: 'book' },
    { title: 'Tema 13', url: '/tema13', icon: 'book' },
    { title: 'Tema 14', url: '/tema14', icon: 'book' },
    { title: 'Tema 15', url: '/tema15', icon: 'book' },
    { title: 'Tema 16', url: '/tema16', icon: 'book' },
    { title: 'Tema 17', url: '/tema17', icon: 'book' },
    { title: 'Tema 18', url: '/tema18', icon: 'book' },
    { title: 'Tema 19', url: '/tema19', icon: 'book' },
    { title: 'Tema 20', url: '/tema20', icon: 'book' },
    { title: 'Tema 21', url: '/tema21', icon: 'book' }

  ];

  constructor() { }
}
