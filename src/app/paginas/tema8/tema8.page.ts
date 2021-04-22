import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tema8',
  templateUrl: './tema8.page.html',
  styleUrls: ['./tema8.page.scss'],
})
export class Tema8Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.nav.navigateForward('tema7');
  }

  avancar() {
    this.nav.navigateForward('tema9');
  }

}
