import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tema3',
  templateUrl: './tema3.page.html',
  styleUrls: ['./tema3.page.scss'],
})
export class Tema3Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.nav.navigateForward('tema2');
  }

  avancar() {
    this.nav.navigateForward('tema4');
  }

}
