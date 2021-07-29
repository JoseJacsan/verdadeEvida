import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tema21',
  templateUrl: './tema21.page.html',
  styleUrls: ['./tema21.page.scss'],
})
export class Tema21Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.nav.navigateForward('tema20');
  }

}
