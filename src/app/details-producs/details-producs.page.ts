import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accounts } from '../interface/accounts';
import { Cards } from '../interface/cards';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-details-producs',
  templateUrl: '../producs/producs.page.html',
  styleUrls: ['../producs/producs.page.scss'],
})
export class DetailsProducsPage implements OnInit {

  listAccounts:Array<Accounts>=[];
  listCards:Array<Cards>=[];
  title = 'Detalle de Producto';
  id=0;//Funcionalidad de Productos
  class = 'title_page_back';
  constructor(private product: ProductsService) { }

  ngOnInit() {
    this.listAccounts = [];
    this.listCards = [];
    this.getDetailProducts();
  }

  getDetailProducts(){
    if(this.product.listAccounts !== undefined){
      this.listAccounts.push(this.product.listAccounts);
    }
    if(this.product.listCards !== undefined){
      this.listCards.push(this.product.listCards);
    }
  }
}
