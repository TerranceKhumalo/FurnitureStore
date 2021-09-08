import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthService } from 'src/app/services/hardcoded-auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  errorMessage: string = 'Invalid username or password';
  inValidLogin: boolean = false;

  loginForm = new FormGroup({
    userEmail: new FormControl('hello there'),
    userPassword: new FormControl()
  });

  constructor(private hardcodedAuth: HardcodedAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    let user = this.loginForm.value.userEmail;
    let pass = this.loginForm.value.userPassword;
    
    if(this.hardcodedAuth.login(user, pass)){
      this.router.navigate(['']);
      this.inValidLogin = false;
    }else{
      this.inValidLogin = true;
    }

  }

}
