import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tema17',
  templateUrl: './tema17.page.html',
  styleUrls: ['./tema17.page.scss'],
})
export class Tema17Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.nav.navigateForward('tema16');
  }

  avancar() {
    this.nav.navigateForward('tema18');
  }

}
