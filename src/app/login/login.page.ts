import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../interface/user';
import { UserRequest } from '../interface/user-request';
import { AlertService } from '../service/alert.service';
import { AuthenticateService } from '../service/authenticate.service';
import { FormService } from '../service/form.service';
import { LoadingService } from '../service/loading.service';
import { SesionGuardsService } from '../service/sesion-guards.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  userAuth: Subscription;
  getUserAuth: Subscription;

  validation_message = {
    userId:[
      {type:"required", message: "El documento de identidad es requerido"}
    ],
    password:[
      {type:"required", message: "La contraseña es requerida"}
    ]    
  }

  constructor(private formBuilder:FormBuilder,
              private authService:AuthenticateService,
              private router: Router,
              public token: TokenService,
              private loading: LoadingService,
              private formu: FormService,
              private alert: AlertService) {}

  ngOnInit() {
    let info = this.token.showRemeberUser();
    this.loginForm = this.formBuilder.group({
      userId: new FormControl(info.user,Validators.compose([
        Validators.required
      ])),
      password: new FormControl(info.pass,Validators.compose([
        Validators.required
      ])),
      remeber: new FormControl("",Validators.compose([])),        
    });
    
  }

  login(form:FormGroup){
    if(this.formu.validateForm(form)){

      let load = this.loading.showLoader();
      this.userAuth = this.authService.loginUser({userId:form.value.userId,password:form.value.password}).subscribe(
        async (res:any) =>{

         //Se valida si el usuario solicitó que le recordara el usuario y la clave
         if(form.value.remeber){
          this.token.setRememberUser({user:form.value.userId,pass:form.value.password});
         }else{
          this.token.noRememberUser();
         }

         this.token.saveToken(res.access_token);
         this.authService.indLogin.next(true);
         this.loading.hideLoader(load);         

         this.loginForm.get('userId').reset();
         this.loginForm.get('password').reset();
         this.loginForm.get('remeber').reset();

         //Se obtiene la información del usuario
         load = this.loading.showLoader();
         this.getUserAuth = await this.authService.getUser().subscribe(
           (res:User) =>{        
            this.loading.hideLoader(load);
            this.token.addUserStorage(res);
            this.authService.indLogin.next(true);
           },
           (error : any)=>{
              this.loading.hideLoader(load);
           }
         );

         this.router.navigate(['/producs']);

        },
        (error : any)=>{
          this.loading.hideLoader(load);
          try {
            this.alert.showAlert('Error',error.error.message);
          } catch (errors) {
            this.alert.showAlert('Error',errors);
          }           
        }
      );

    }

  }

  ngDestroy(){
    this.userAuth.unsubscribe();
    this.getUserAuth.unsubscribe();
  }
}
