import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionGuardsService implements CanActivate {
  
  isSesionActivate = new BehaviorSubject({});
  pathAnt:string='';
  constructor() { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let path = route.routeConfig.path;
    try {      
      const sesion = localStorage.getItem('token');
      if(sesion){
        this.isSesionActivate.next({isSate:true,path:path,pathAnt:this.pathAnt});
        return true;
      }else{
        this.isSesionActivate.next({isSate:false,path:path,pathAnt:this.pathAnt});
        this.pathAnt = path;
        if(path === 'login'){
          return true;
        }else{
          return false;
        }       
      }
    } catch (error) {
      this.isSesionActivate.next({isSate:false,path:path,pathAnt:this.pathAnt});
      this.pathAnt = path;
      return false;
    }

  }

  getSesionActivate(): Observable<any> {
    return this.isSesionActivate.asObservable();
  }
}
