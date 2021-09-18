import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProducsPageRoutingModule } from './producs-routing.module';

import { ProducsPage } from './producs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProducsPageRoutingModule
  ],
  declarations: [ProducsPage]
})
export class ProducsPageModule {}
