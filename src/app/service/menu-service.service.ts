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
        indOptionHor : false
      },
      {
        nombre: "Mis productos",
        path: "/producs",
        pathConfigu : "producs",
        indMenu: true,
        indOption : true,
        icon:'../../assets/images/icon_my_products_green.svg',
        indOptionHor : true,
        icon_gray : '../../assets/images/icon_account_gray.svg'
      },
      {
        nombre: "Detalle de Producto",
        path: "producs/",
        pathConfigu : "producs/:id/:type",
        indMenu: false,
        indOption : false,
        indOptionHor : false
      },
      {
        nombre: "Transacciones",
        path: "/transaction",
        pathConfigu : "transaction",
        indMenu: true,
        indOption : true,
        icon:'../../assets/images/icon_transactions_green.svg',
        indOptionHor : true,
        icon_gray : '../../assets/images/icon_transactions_gray.svg'
      },
      {
        nombre: "Ofertas",
        path: "/ofertas",
        pathConfigu : "ofertas",
        indMenu: true,
        indOption : true,
        icon:'../../assets/images/icon_offers_green.svg',
        indOptionHor : true,
        icon_gray : '../../assets/images/icon_offers_gray.svg'
      },
      {
        nombre: "Configuración",
        path: "/configuration",
        pathConfigu : "configuration",
        indMenu: true,
        indOption : true,
        icon:'../../assets/images/icon_config_green.svg',
        indOptionHor : true,
        icon_gray : '../../assets/images/icon_config_gray.svg'
      },
      {
        nombre: "Contacto",
        path: "/contacto",
        pathConfigu : "contacto",
        indMenu: false,
        indOption : true,
        icon:'../../assets/images/icon_contact.svg',
        indOptionHor : false 
      },
      {
        nombre: "Sucursales",
        path: "/sucursales",
        pathConfigu : "sucursales",
        indMenu: false,
        indOption : true,
        icon:'../../assets/images/location-outline.svg',
        indOptionHor : false
      }                               
    ];
  }
}