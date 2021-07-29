import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tema15',
  templateUrl: './tema15.page.html',
  styleUrls: ['./tema15.page.scss'],
})
export class Tema15Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.nav.navigateForward('tema14');
  }

  avancar() {
    this.nav.navigateForward('tema16');
  }

}
