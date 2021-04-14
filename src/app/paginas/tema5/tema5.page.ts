import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tema5',
  templateUrl: './tema5.page.html',
  styleUrls: ['./tema5.page.scss'],
})
export class Tema5Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.nav.navigateForward('tema4');
  }

  avancar() {
    this.nav.navigateForward('tema6');
  }

}
