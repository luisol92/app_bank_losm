import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Accounts } from '../interface/accounts';
import { Cards } from '../interface/cards';
import { LoadingService } from '../service/loading.service';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-producs',
  templateUrl: './producs.page.html',
  styleUrls: ['./producs.page.scss'],
})
export class ProducsPage implements OnInit {
   
  listAccounts:Array<Accounts>=[];
  listCards:Array<Cards>=[];
  title = 'Mis Productos';
  id=1;//Funcionalidad de Productos
  class = 'title_page';
  suscribeAccounts :Subscription;
  suscribeCards :Subscription;

  constructor(private products: ProductsService, 
              private loading: LoadingService,
              private router: Router) { }

  ngOnInit() {
    this.getAccounts();
    this.getCards();
  }
  
  async getAccounts(){
    
    let load = this.loading.showLoader();
    this.suscribeAccounts = await this.products.getAccounts().subscribe(
      (res:Array<Accounts>) =>{           
       this.loading.hideLoader(load);
       this.listAccounts=res;
      },
      (error : any)=>{
         this.loading.hideLoader(load);
      }
    );

  }

  async getCards(){
    
    let load = this.loading.showLoader();
    this.suscribeCards = await this.products.getCards().subscribe(
      (res:Array<Cards>) =>{          
       this.loading.hideLoader(load);
       this.listCards=res;
      },
      (error : any)=>{
         this.loading.hideLoader(load);
      }
    );

  }

  ngDestroy(){
    this.suscribeAccounts.unsubscribe();
    this.suscribeCards.unsubscribe();
  }
}
