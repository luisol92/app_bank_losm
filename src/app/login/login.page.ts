import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_message = {
    document_indenty:[
      {type:"required", message: "El documento de identidad es requerido"}
    ],
    password:[
      {type:"required", message: "La contraseña es requerida"}
    ]    
  }
  constructor(private formBuilder:FormBuilder) {
    this.loginForm = this.formBuilder.group({
      document_indenty: new FormControl("",Validators.compose([
        Validators.required
      ])),
      password: new FormControl("",Validators.compose([
        Validators.required
      ])),      
    });
   }

  ngOnInit() {
  }

}
