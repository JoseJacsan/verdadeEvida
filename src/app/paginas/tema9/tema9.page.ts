import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tema9',
  templateUrl: './tema9.page.html',
  styleUrls: ['./tema9.page.scss'],
})
export class Tema9Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.nav.navigateForward('tema8');
  }

  avancar() {
    this.nav.navigateForward('tema10');
  }

}
