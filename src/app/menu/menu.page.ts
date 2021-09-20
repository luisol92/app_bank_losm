import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Menu } from '../interface/menu';
import { MenuServiceService } from '../service/menu-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  listMenu:Array<Menu>=[];
  constructor(private menu: MenuController,
              private menuService: MenuServiceService) { }

  ngOnInit() {
    this.showMenu();
  }

  openFirst() {
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

  showMenu(){
    this.listMenu=this.menuService.getMenu().filter(info => info.indOption === true);
  }
}
