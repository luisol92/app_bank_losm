import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interface/user';
import { UserRequest } from '../interface/user-request';
import { AuthenticateService } from '../service/authenticate.service';
import { FormService } from '../service/form.service';
import { LoadingService } from '../service/loading.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

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
              private formu: FormService) {

    this.loginForm = this.formBuilder.group({
      userId: new FormControl("",Validators.compose([
        Validators.required
      ])),
      password: new FormControl("",Validators.compose([
        Validators.required
      ])),      
    });

   }

  ngOnInit() {
  }

  login(form:FormGroup){

    if(this.formu.validateForm(form)){

      let load = this.loading.showLoader();
      this.authService.loginUser({userId:form.value.userId,password:form.value.password}).subscribe(
        async (res:any) =>{
         this.loading.hideLoader(load);
         this.token.saveToken(res.access_token);

         //Se obtiene la información del usuario
         load = this.loading.showLoader();
         await this.authService.getUser().subscribe(
           (res:User) =>{        
            this.loading.hideLoader(load);
            this.authService.addUserStorage(res);
           },
           (error : any)=>{
              this.loading.hideLoader(load);
           }
         );
         this.router.navigate(['/producs']);

        },
        (error : any)=>{
           this.loading.hideLoader(load);
        }
      );

    }

  }
}
