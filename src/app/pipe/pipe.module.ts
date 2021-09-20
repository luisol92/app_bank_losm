import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LengthPipe } from './length.pipe';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [LengthPipe],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [LengthPipe]
})
export class PipeModule { 

  static forRoot() {
    return {
        ngModule: PipeModule,
        providers: [],
    };
 }
}
