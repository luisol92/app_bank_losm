import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsProducsPageRoutingModule } from './details-producs-routing.module';

import { DetailsProducsPage } from './details-producs.page';
import { PipeModule } from '../pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsProducsPageRoutingModule,
    PipeModule
  ],
  declarations: [DetailsProducsPage]
})
export class DetailsProducsPageModule {}
