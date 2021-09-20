import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterLink } from '@angular/router';

import { AlertController, IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuPage } from './menu/menu.page';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutInterceptor } from './auth.interceptor';
import { PipeModule } from './pipe/pipe.module';
import { MenuGuardsService } from './service/menu-guards.service';

@NgModule({
  declarations: [AppComponent,MenuPage],
  entryComponents: [],
  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule,
            HttpClientModule,
            PipeModule
          ],     
  providers: [
    StatusBar,
    SplashScreen,
    AlertController,
    MenuGuardsService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AutInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
