import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tema14',
  templateUrl: './tema14.page.html',
  styleUrls: ['./tema14.page.scss'],
})
export class Tema14Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.nav.navigateForward('tema13');
  }

  avancar() {
    this.nav.navigateForward('tema15');
  }

}
