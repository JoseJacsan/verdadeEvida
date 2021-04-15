import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tema7',
  templateUrl: './tema7.page.html',
  styleUrls: ['./tema7.page.scss'],
})
export class Tema7Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.nav.navigateForward('tema6');
  }

  avancar() {
    this.nav.navigateForward('tema8');
  }

}
