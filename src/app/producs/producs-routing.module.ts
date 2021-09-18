import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProducsPage } from './producs.page';

const routes: Routes = [
  {
    path: '',
    component: ProducsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProducsPageRoutingModule {}
