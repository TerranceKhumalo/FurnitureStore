import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { UserClaims } from '@okta/okta-auth-js';
import { Customer } from 'src/app/common/customer';
import { BasicAuthService } from 'src/app/services/basic-auth.service';
import { CartService } from 'src/app/services/cart/cart.service';
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

  storage: Storage = sessionStorage;

  totalQuantityItems: number = 0;
  totalItemPrice: number = 0;

  constructor(private oktaAuthService: OktaAuthService, private router: Router, private customerService: CustomerService, private cartService: CartService) { }

  ngOnInit(): void {
    this.oktaAuthService.$authenticationState.subscribe(
      (result) => {
        this.isAuthenticated = result
        this.getUserDetails();
      }
    );

    this.updateCartStatus();
  }

  //Update total cost and Quantity of items.
  updateCartStatus() {
    this.cartService.totalPrice.subscribe(
      data => this.totalItemPrice = data
    );
    this.cartService.totalQuntity.subscribe(
      data => this.totalQuantityItems = data
    )
  }

  //Version 2
  //TODO: Clean up method to remove unused fields.
  getUserDetails() {
    if (this.isAuthenticated) {
      this.oktaAuthService.getUser().then(
        res => {
          //Check if user in OKTA exists in local database.
          // this.customerService.checkCustomerInDatabase(res.email).subscribe(
          //   customerResponseData => {

          //   },
          const customerEmail = res.email;
          //Save user email to be used 
          this.storage.setItem('userEmail', JSON.stringify(customerEmail));
        });
    }
  }



  // handleSaveCustomerToDatabse(customerDetails: UserClaims){
  //   //Validate that details are not undefined.
  //   if (customerDetails.given_name && customerDetails.family_name && customerDetails.email) {
  //     this.customerService.saveCustomerToDatabase(customerDetails.given_name, customerDetails.family_name, customerDetails.email).subscribe(
  //       saveResponse => {
  //         this.assignCustomerToServiceCustomer({...saveResponse});
  //       }
  //     );
  //   }
  // }

  //Assign customer details to local varibale in customer service.
  //TODO: update method to retrive customer data on OKTA
  // assignCustomerToServiceCustomer(customerData: Customer) {
  //   this.customerService.setCustomerDetails({ ...customerData })
  //   this.userName = this.customerService.getCustomerDetails().name;
  //   console.log(customerData);
  // }

  //version 2 logout
  logout() {
    this.oktaAuthService.signOut();
    this.router.navigate(['/login']);
  }

}
