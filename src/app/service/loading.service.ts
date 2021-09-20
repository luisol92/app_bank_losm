import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loader: HTMLIonLoadingElement;
  private loaderLoading = false;
  constructor(public loadingController: LoadingController) { }

  // This will show then autohide the loader
  showHideAutoLoader() {

    this.loaderLoading = true;
    this.loadingController.create({
        message:"mensjaaaaa",
        showBackdrop: true
    }).then(load => {
        this.loader = load;
        load.present().then(() => { this.loaderLoading = false; });
    });

  }

  // Show the loader for infinite time
  async showLoader() {

    const loading = this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    })
    await (await loading).present();
    return loading;

  }

  // Hide the loader if already created otherwise return error
  async hideLoader(loading) {
    loading.then(load => {
      load.dismiss();
    })
  }

}
