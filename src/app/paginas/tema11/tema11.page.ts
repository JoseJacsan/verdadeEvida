import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tema11',
  templateUrl: './tema11.page.html',
  styleUrls: ['./tema11.page.scss'],
})
export class Tema11Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.nav.navigateForward('tema10');
  }

  avancar() {
    this.nav.navigateForward('tema12');
  }

}
