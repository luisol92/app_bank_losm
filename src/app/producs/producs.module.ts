import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProducsPageRoutingModule } from './producs-routing.module';

import { ProducsPage } from './producs.page';
import { PipeModule } from '../pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProducsPageRoutingModule,
    PipeModule
  ],
  declarations: [ProducsPage]
})
export class ProducsPageModule {}
