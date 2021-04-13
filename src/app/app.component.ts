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
    { title: 'Tema 3', url: '/tema3', icon: 'book' }

  ];

  constructor() { }
}
