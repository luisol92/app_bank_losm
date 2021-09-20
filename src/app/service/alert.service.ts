import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertCtrl: AlertController) { }

  showAlert(title:string,msj:string,subtitle:string=null,classe:string='my-custom-class') {

    this.alertCtrl.create({
      header: title,
      subHeader: subtitle,
      message: msj,
      cssClass:classe,
      buttons: ['Ok']
    }).then(res => {

      res.present();

    });
  }

}
