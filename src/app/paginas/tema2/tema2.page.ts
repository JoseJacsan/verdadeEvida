import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tema2',
  templateUrl: './tema2.page.html',
  styleUrls: ['./tema2.page.scss'],
})
export class Tema2Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.nav.navigateForward('tema1');
  }

  avancar() {
    this.nav.navigateForward('tema3');
  }

}
