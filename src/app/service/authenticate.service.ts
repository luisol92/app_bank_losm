import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRequest } from '../interface/user-request';
import { environment } from 'src/environments/environment';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  loginUser(credential){
    return this.http.post(`${environment.urlApi}/sign_in`, credential);
  }

  getUser(){
    return this.http.get(`${environment.urlApi}/user_data`);
  }

  addUserStorage(user:User){
    localStorage.setItem('name',user.name);
    localStorage.setItem('lastname',user.lastname);
    localStorage.setItem('photo',user.photo);
  }
}
