import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BasicAuthService } from 'src/app/services/basic-auth.service';


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

  constructor(private basicAuth: BasicAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    let user = this.loginForm.value.userEmail;
    let pass = this.loginForm.value.userPassword;
    
    this.loginUser(user, pass);
  }

  loginUser(username: string, password: string){
    this.basicAuth.executeBasicAuth(username, password).subscribe(
      res=>{
        console.log("User loged in", res);
        this.router.navigate(['']);
        this.inValidLogin = false;
      },
      err=>{
        console.log("There was an error!");
        this.inValidLogin = true;
      }
    );
  }

}
