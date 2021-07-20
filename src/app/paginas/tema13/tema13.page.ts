import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tema13',
  templateUrl: './tema13.page.html',
  styleUrls: ['./tema13.page.scss'],
})
export class Tema13Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.nav.navigateForward('tema12');
  }

  avancar() {
    this.nav.navigateForward('tema14');
  }

}
