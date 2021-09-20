import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoadingService } from './service/loading.service';
import { TokenService } from './service/token.service';

@Injectable()
export class AutInterceptor implements HttpInterceptor{

  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = this.addToken(req);
    return next.handle(req);
  }

  /*
    Autor: Luis Olmedo Solís Mera
    Fecha: 18/09/2021
    Descripción: Funcionalidad que permite adicionar el token en el header de los las peticiones que se capturen 
  */
  private addToken(request: HttpRequest<any>){
    let token = this.tokenService.getToken();
    if(request.url !== environment.urllogin){

      if(token){
        request = request.clone({
          setHeaders:{
            authorization: `Bearer ${token}`
          }
        });

        return request;

      }else{
        alert("Se requiere Token");
        return request;
      }

    }else{
      return request;
    }
  }
}
