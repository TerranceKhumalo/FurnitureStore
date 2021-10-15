import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { BasicAuthService } from 'src/app/services/basic-auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public isAuthenticated: boolean = false;
  public userFullName: string | undefined;
  public userName: string | undefined;

  constructor(private oktaAuthService: OktaAuthService, private router: Router) { }

  ngOnInit(): void {
    this.oktaAuthService.$authenticationState.subscribe(
      (result)=>{
        this.isAuthenticated = result
        this.getUserDetails();
      }
    );
  }

  //Version 2
  getUserDetails() {
    if (this.isAuthenticated) {
      this.oktaAuthService.getUser().then(
        res=>{
          this.userFullName = res.name, this.userName = this.userFullName?.split(' ')[0];
          console.log(res);
          
        }
      )
    }
  }

  //version 2 logout
  logout() {
    this.oktaAuthService.signOut();
    this.router.navigate(['/login']);
  }

}
