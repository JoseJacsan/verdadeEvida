import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tema18',
  templateUrl: './tema18.page.html',
  styleUrls: ['./tema18.page.scss'],
})
export class Tema18Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.nav.navigateForward('tema17');
  }

  avancar() {
    this.nav.navigateForward('tema19');
  }

}
