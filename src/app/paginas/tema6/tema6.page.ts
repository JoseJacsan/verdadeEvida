import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tema6',
  templateUrl: './tema6.page.html',
  styleUrls: ['./tema6.page.scss'],
})
export class Tema6Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.nav.navigateForward('tema5');
  }

  avancar() {
    this.nav.navigateForward('tema7');
  }

}
