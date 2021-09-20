import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MenuServiceService } from './menu-service.service';

@Injectable({
  providedIn: 'root'
})
export class MenuGuardsService implements CanActivate {

  stateMenu = new BehaviorSubject(true);
  constructor(private menu : MenuServiceService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let menuActual=this.menu.getMenu().filter(data=> data.pathConfigu === route.routeConfig.path);
    this.stateMenu.next(menuActual[0].indMenu);
    return true;
  }

  getValidateMenu(): Observable<any> {
    return this.stateMenu.asObservable();
  }
}
