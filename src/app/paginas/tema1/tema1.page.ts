import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tema1',
  templateUrl: './tema1.page.html',
  styleUrls: ['./tema1.page.scss'],
})
export class Tema1Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.nav.navigateForward('home');
  }

  avancar() {
    this.nav.navigateForward('tema2');
  }

}
