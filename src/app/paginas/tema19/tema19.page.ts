import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tema19',
  templateUrl: './tema19.page.html',
  styleUrls: ['./tema19.page.scss'],
})
export class Tema19Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.nav.navigateForward('tema18');
  }

  avancar() {
    this.nav.navigateForward('tema20');
  }

}
