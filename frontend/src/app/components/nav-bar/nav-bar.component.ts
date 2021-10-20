import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { Customer } from 'src/app/common/customer';
import { BasicAuthService } from 'src/app/services/basic-auth.service';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public isAuthenticated: boolean = false;
  public customerDetails: Customer | undefined;
  public userName: string | undefined;

  constructor(private oktaAuthService: OktaAuthService, private router: Router, private customerService: CustomerService) { }

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
          //Check if user in OKTA exists in local database.
          this.customerService.checkCustomerInDatabase("khumaloterrance@gmail.com").subscribe(
            customerResponseData=>{
              //Assign Okta customer to local service.
              this.customerService.setCustomerDetails({...customerResponseData});
              console.log(this.customerService.getCustomerDetails().name+" that's my name.");
            },
            err=>{
              
            }
          ); 
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
