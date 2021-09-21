import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
  objAccounts:Accounts;
  objCards:Cards;
  indType:string = '';
  constructor(private router: ActivatedRoute) { }

  async ngOnInit() {
    this.listAccounts = [];
    this.listCards = [];
    this.indType='';

    await this.router.params.subscribe(params =>{
      this.indType = params.type;
    });

    await this.router.queryParams.subscribe((queryParams):any =>{

      if(this.indType === 'AC'){
        this.objAccounts={
          alias : queryParams.alias,
          availableAmount : queryParams.availableAmount,
          number : queryParams.number,
          productType : queryParams.productType
        }
      }
      if(this.indType === 'TC'){
        this.objCards = {
          alias : queryParams.alias,
          availableAmountRD : queryParams.availableAmountRD,
          availableAmountUS : queryParams.availableAmountUS,
          isInternational : queryParams.isInternational,
          number : queryParams.number,
          productType : queryParams.productType
        }
      }      
    });
    
    this.getDetailProducts();
  }

  getDetailProducts(){
    if(this.objAccounts !== undefined){
      this.listAccounts.push(this.objAccounts);
    }
    if(this.objCards !== undefined){
      this.listCards.push(this.objCards);
    }
  }
}
