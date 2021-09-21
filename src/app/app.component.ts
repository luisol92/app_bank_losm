import { Component, QueryList, ViewChildren } from '@angular/core';

import { IonRouterOutlet, NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuGuardsService } from './service/menu-guards.service';
import { SesionGuardsService } from './service/sesion-guards.service';
import { AuthenticateService } from './service/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  indValidateMenu = true;
  indOptionHori = true;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private validateMenu : MenuGuardsService,
    private sesion : SesionGuardsService,
    private auth : AuthenticateService,
    private nav : NavController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.indValidateMenu = true;
    this.sesion.getSesionActivate().subscribe(
      objSesion => {
        this.auth.redirectSesion(objSesion);
      }
    );
    this.validateMenu.getValidateMenu().subscribe(stateValidate =>{
        this.indValidateMenu = stateValidate;
    });

    this.validateMenu.getValidateHoriz().subscribe(stateMenuHori =>{
      this.indOptionHori = stateMenuHori.indOptionHor;
    });
  }  
  
  back(){
    this.nav.back();
  }
}
