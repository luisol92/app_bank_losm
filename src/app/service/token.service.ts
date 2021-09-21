import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string){
     localStorage.setItem('token',token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  addUserStorage(user:User){
    localStorage.setItem('name',user.name);
    localStorage.setItem('lastname',user.lastName);
    localStorage.setItem('photo',user.photo);
  }

  setRememberUser(obj:any){
    localStorage.setItem('user',obj.user);
    localStorage.setItem('pass',obj.pass);
  }

  noRememberUser(){
    try {
      localStorage.removeItem('user');
      localStorage.setItremoveItemem('pass');
    } catch (error) {}

  }

  showRemeberUser(){
    let user="";
    let pass="";
    try {
      user = localStorage.getItem('user');
      pass = localStorage.getItem('pass');      
    } catch (error) {
      user = "";
      pass = "";         
    }
    return {user:user,pass:pass}
  }



}
