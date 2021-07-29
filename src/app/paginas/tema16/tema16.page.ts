import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tema16',
  templateUrl: './tema16.page.html',
  styleUrls: ['./tema16.page.scss'],
})
export class Tema16Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.nav.navigateForward('tema15');
  }

  avancar() {
    this.nav.navigateForward('tema17');
  }

}
