import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  errorMessage: string = 'Invalid username or password';
  inValidLogin: boolean = false;

  registrationForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    userEmail: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    userPassword: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
    ])
  });
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){}

  // get userName() { return this.registrationForm.get('userName'); }

}
