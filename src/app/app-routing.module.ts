import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuGuardsService } from './service/menu-guards.service';
import { SesionGuardsService } from './service/sesion-guards.service';

const routes: Routes = [
  { path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  { path: 'home', 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [MenuGuardsService,SesionGuardsService]
  },
  {
    path: 'producs',
    loadChildren: () => import('./producs/producs.module').then( m => m.ProducsPageModule),
    canActivate: [MenuGuardsService,SesionGuardsService]
  },
  {
    path: 'producs/:id/:type',
    loadChildren: () => import('./details-producs/details-producs.module').then( m => m.DetailsProducsPageModule),
    canActivate: [MenuGuardsService,SesionGuardsService]
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./transaction/transaction.module').then( m => m.TransactionPageModule),
    canActivate: [MenuGuardsService,SesionGuardsService]
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./ofertas/ofertas.module').then( m => m.OfertasPageModule),
    canActivate: [MenuGuardsService,SesionGuardsService]
  },
  {
    path: 'configuration',
    loadChildren: () => import('./configuration/configuration.module').then( m => m.ConfigurationPageModule),
    canActivate: [MenuGuardsService,SesionGuardsService]
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule),
    canActivate: [MenuGuardsService]
  },
  {
    path: 'sucursales',
    loadChildren: () => import('./sucursales/sucursales.module').then( m => m.SucursalesPageModule),
    canActivate: [MenuGuardsService, SesionGuardsService]
  },
  {
    path: 'footer-menu',
    loadChildren: () => import('./footer-menu/footer-menu.module').then( m => m.FooterMenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
