import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/common/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private productURL:string = 'http://localhost:8080/api/customers';

  constructor(private httpClient: HttpClient) { }

  //TODO: Check if customer exist in the database if not add customer to datbase then return true.

  checkCustomerInDatabase(email: string){
    const findCustomerURL: string = `${this.productURL}/search/findByEmail?email=${email}`;
    
    return this.httpClient.get<Customer>(findCustomerURL);
  }


  //TODO: create method that returns true or false depanding if customer is in the databse table.
}

