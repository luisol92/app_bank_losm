import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  indLogin = new BehaviorSubject(false);
  indClose = new BehaviorSubject(false);
  constructor(private http: HttpClient,
              private router: Router) {
  }

  loginUser(credential){
    return this.http.post(`${environment.urlApi}/sign_in`, credential);
  }

  getUser(){
    return this.http.get(`${environment.urlApi}/user_data`);
  }

  redirectSesion(objSesion:any){
    if(objSesion.path === 'login' && objSesion.isSate === true){
      this.router.navigate(['/producs']);
    }else{
      if(objSesion.path !== 'login' && objSesion.isSate === false){
        this.router.navigate(['/login']);
      }
    }
  }

  async logout(){
    await localStorage.clear();
    await this.indClose.next(true);
    this.router.navigate(['/login']);
  }

  getStartSession(): Observable<any> {
    return this.indLogin.asObservable();
  }

  closeSession(): Observable<any> {
    return this.indClose.asObservable();
  }
}
