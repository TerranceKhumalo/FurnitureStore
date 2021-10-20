import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/common/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private productURL:string = 'http://localhost:8080/api/customers';
  private customerDetails: Customer = {
    name: 'Dummy Name',
    surname: 'Dummy Surname',
    email: 'dummy@gmail.com',
    address:{
      streetName: 'dummy street',
      city: 'dummy city',
      country: 'dummy country',
      zipCode: 1230
    } 
  };

  constructor(private httpClient: HttpClient) { }

  //TODO: Check if customer exist in the database if not add customer to datbase then return true.

  checkCustomerInDatabase(email?: string){
    const findCustomerURL: string = `${this.productURL}/search/findByEmail?email=${email}`;
    
    return this.httpClient.get<Customer>(findCustomerURL);
  }

  addCustomerToDatabase(customer: Customer){

  }

  setCustomerDetails(customer: Customer){
    this.customerDetails = customer;
  }

  getCustomerDetails(): Customer{
    return this.customerDetails;
  }

  //TODO: create method that returns true or false depanding if customer is in the databse table.
}

