import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private alert: AlertService) { }

  validateForm(form:FormGroup){
      if(form.status === 'INVALID'){
        this.alert.showAlert('Error','Debe de ingresar la información solicitada del formulario');
        return false;
      }else{
        return true;
      }
  }
}
