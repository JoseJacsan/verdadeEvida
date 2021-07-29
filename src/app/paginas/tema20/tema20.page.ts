import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tema20',
  templateUrl: './tema20.page.html',
  styleUrls: ['./tema20.page.scss'],
})
export class Tema20Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.nav.navigateForward('tema19');
  }

  avancar() {
    this.nav.navigateForward('tema21');
  }

}
