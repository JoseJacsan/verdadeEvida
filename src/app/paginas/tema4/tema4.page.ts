import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tema4',
  templateUrl: './tema4.page.html',
  styleUrls: ['./tema4.page.scss'],
})
export class Tema4Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.nav.navigateForward('tema3');
  }

  avancar() {
    this.nav.navigateForward('tema5');
  }

}
