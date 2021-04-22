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
    { title: 'Tema 9', url: '/tema9', icon: 'book' }

  ];

  constructor() { }
}
