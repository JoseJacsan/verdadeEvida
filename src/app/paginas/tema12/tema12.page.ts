import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tema12',
  templateUrl: './tema12.page.html',
  styleUrls: ['./tema12.page.scss'],
})
export class Tema12Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.nav.navigateForward('tema11');
  }

  avancar() {
    this.nav.navigateForward('tema13');
  }

}
