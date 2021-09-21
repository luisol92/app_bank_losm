import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Menu } from '../interface/menu';
import { User } from '../interface/user';
import { AuthenticateService } from '../service/authenticate.service';
import { MenuServiceService } from '../service/menu-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  listMenu:Array<Menu>=[];
  token:string;
  infoUser:User;
  

  constructor(private menu: MenuController,
              private menuService: MenuServiceService,
              private auth : AuthenticateService) {}

  ngOnInit() {

    this.auth.getStartSession().subscribe(res =>{
      this.showMenu();
    });

    this.auth.closeSession().subscribe(res =>{
      this.showMenu();
    });

    this.closeMenu();
  }

  async openMenu() {
    await this.menu.open();
  }

  showMenu(){
    this.token = localStorage.getItem('token');
    if(this.token){
      this.infoUser={
        name: localStorage.getItem('name'),
        lastName : localStorage.getItem('lastname'),
        photo: localStorage.getItem('photo')
      }
      this.listMenu=this.menuService.getMenu().filter(info => info.indOption === true);
    }else{
      this.listMenu=this.menuService.getMenu().filter(info => info.indOption === true && info.indToken === false);
    }
    
  }

  logout(){ 
    this.closeMenu();  
    this.auth.logout();
  }
  
  async closeMenu() {
    await this.menu.close();
  }

}
