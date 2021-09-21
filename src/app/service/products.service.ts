import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Accounts } from '../interface/accounts';
import { Cards } from '../interface/cards';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAccounts(){
    return this.http.get(`${environment.urlApi}/products/accounts`);
  }

  getCards(){
    return this.http.get(`${environment.urlApi}/products/credit_cards`);
  }
    
}
