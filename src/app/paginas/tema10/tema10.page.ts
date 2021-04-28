import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tema10',
  templateUrl: './tema10.page.html',
  styleUrls: ['./tema10.page.scss'],
})
export class Tema10Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.nav.navigateForward('tema9');
  }

  avancar() {
    this.nav.navigateForward('tema11')
  }

}
