import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Menu } from '../interface/menu';
import { MenuServiceService } from '../service/menu-service.service';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.page.html',
  styleUrls: ['./footer-menu.page.scss'],
})
export class FooterMenuPage implements OnInit {
  
  listMenu:Array<Menu>=[];
  selectedPath:string='';
  constructor(private menuService: MenuServiceService,private router: Router) { 
    this.router.events.subscribe((event:RouterEvent)=>{
      if(event.url !== undefined){
        this.selectedPath = event.url;
      }                  
    }                
    );
  }

  ngOnInit() {
    this.showMenu();
  }

  showMenu(){
    this.listMenu=this.menuService.getMenu().filter(info => info.indOptionHor === true);
  }

}
