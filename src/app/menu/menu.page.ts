import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  openFirst() {
    console.log("Hola Luuuuchgo");
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  async openMenu() {
    await this.menu.open();
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }  

}
