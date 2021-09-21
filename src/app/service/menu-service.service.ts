import { Injectable } from '@angular/core';
import { Menu } from '../interface/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  listMenu:Array<Menu>=[];

  constructor() {}

  getMenu():Array<Menu> {

    return this.listMenu=[{
        nombre: "Login",
        path: "login",
        pathConfigu : "login",
        indMenu: true,
        indOption : false,
        indOptionHor : false,
        indToken: false
      },
      {
        nombre: "Mis productos",
        path: "/producs",
        pathConfigu : "producs",
        indMenu: true,
        indOption : true,
        icon:'../../assets/images/icon_my_products_green.svg',
        indOptionHor : true,
        icon_gray : '../../assets/images/icon_account_gray.svg',
        indToken: true
      },
      {
        nombre: "Detalle de Producto",
        path: "producs/",
        pathConfigu : "producs/:id/:type",
        indMenu: false,
        indOption : false,
        indOptionHor : false,
        indToken: true
      },
      {
        nombre: "Transacciones",
        path: "/transaction",
        pathConfigu : "transaction",
        indMenu: true,
        indOption : true,
        icon:'../../assets/images/icon_transactions_green.svg',
        indOptionHor : true,
        icon_gray : '../../assets/images/icon_transactions_gray.svg',
        indToken: true
      },
      {
        nombre: "Ofertas",
        path: "/ofertas",
        pathConfigu : "ofertas",
        indMenu: true,
        indOption : true,
        icon:'../../assets/images/icon_offers_green.svg',
        indOptionHor : true,
        icon_gray : '../../assets/images/icon_offers_gray.svg',
        indToken: true
      },
      {
        nombre: "Configuración",
        path: "/configuration",
        pathConfigu : "configuration",
        indMenu: true,
        indOption : true,
        icon:'../../assets/images/icon_config_green.svg',
        indOptionHor : true,
        icon_gray : '../../assets/images/icon_config_gray.svg',
        indToken: true
      },
      {
        nombre: "Contacto",
        path: "/contacto",
        pathConfigu : "contacto",
        indMenu: false,
        indOption : true,
        icon:'../../assets/images/icon_contact.svg',
        indOptionHor : false ,
        indToken: false
      },
      {
        nombre: "Sucursales",
        path: "/sucursales",
        pathConfigu : "sucursales",
        indMenu: false,
        indOption : true,
        icon:'../../assets/images/location-outline.svg',
        indOptionHor : false,
        indToken: false
      }                               
    ];
  }
}