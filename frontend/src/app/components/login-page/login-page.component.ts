import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { BasicAuthService } from 'src/app/services/basic-auth.service';
import * as OktaSignIn from '@okta/okta-signin-widget';
import myAppConfig from 'src/app/config/my-app-config';
import { OktaAuthService } from '@okta/okta-angular';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  errorMessage: string = 'Invalid username or password';
  inValidLogin: boolean = false;
  oktaSignin: any;

  loginForm = new FormGroup({
    userEmail: new FormControl('hello there'),
    userPassword: new FormControl()
  });

  constructor(private basicAuth: BasicAuthService, private router: Router, private oktaAuthService: OktaAuthService) { 
    this.oktaSignin = new OktaSignIn({
      features: {registration: true},
      baseUrl: myAppConfig.oidc.issuer.split('/oauth2')[0],
      clientId: myAppConfig.oidc.clientId,
      redirectUri: myAppConfig.oidc.redirectUri,
      authoParams: {
        pkce: true,
        issuer: myAppConfig.oidc.issuer,
        scopes: myAppConfig.oidc.scope
      }
    });
  }

  ngOnInit(): void {
    this.oktaSignin.remove();
    this.oktaSignin.renderEl(
      {el: '#okta-sign-in-widget'},
    (response: { status: string; })=>{
      if (response.status === 'SUCCESS') {
        this.oktaAuthService.signInWithRedirect();
      }
    },
    (error: any)=>{throw error}
      );
  }

  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   let user = this.loginForm.value.userEmail;
  //   let pass = this.loginForm.value.userPassword;
    
  //   this.loginUser(user, pass);
  // }

  // loginUser(username: string, password: string){
  //   this.basicAuth.executeBasicAuth(username, password).subscribe(
  //     res=>{
  //       console.log("User loged in", res);
  //       this.router.navigate(['']);
  //       this.inValidLogin = false;
  //     },
  //     err=>{
  //       console.log("There was an error!");
  //       this.inValidLogin = true;
  //     }
  //   );
  // }

}
