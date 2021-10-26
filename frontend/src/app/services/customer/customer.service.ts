import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/common/customer';
import { Product } from 'src/app/common/product';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private productURL:string = 'http://localhost:8080/api/customers';
  private customerDetails: Customer = {
    name: 'Dummy Name',
    surname: 'Dummy Surname',
    email: 'dummy@gmail.com',
    address: {
      streetName: 'dummy street',
      city: 'dummy city',
      country: 'dummy country',
      zipCode: 0o00
    },
    shoppingCart: undefined
  };

  constructor(private httpClient: HttpClient) { }

  //TODO: Check if customer exist in the database if not add customer to datbase then return true.
  checkCustomerInDatabase(email?: string){
    const findCustomerURL: string = `${this.productURL}/search/findByEmail?email=${email}`;
    
    return this.httpClient.get<Customer>(findCustomerURL);
  }

  saveCustomerToDatabase(name: string, surname: string, email: string){
   const customerToSaved = {
      name,
      surname,
      email,
      address: {},
      shoppingCart: {}
    }
    return this.httpClient.post<Customer>(`${this.productURL}/save`, customerToSaved);
  }

  //When user saves to cart.
  customerSaveToCart(email: string, product: Product){
    return this.httpClient.post<Customer>(`${this.productURL}/${email}/cart`, product);
  }

  updateCustomerDetails(currentCustomer: Customer){
    return this.httpClient.post<Customer>(this.productURL, currentCustomer);
  }

  setCustomerDetails(customer: Customer){
    this.customerDetails = customer;
  }

  getCustomerDetails(): Customer{
    return this.customerDetails;
  }

  
}

