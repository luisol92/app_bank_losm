import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsProducsPageRoutingModule } from './details-producs-routing.module';

import { DetailsProducsPage } from './details-producs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsProducsPageRoutingModule
  ],
  declarations: [DetailsProducsPage]
})
export class DetailsProducsPageModule {}
