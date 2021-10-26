import { Injectable } from '@angular/core';
import { Customer } from 'src/app/common/customer';
import { Product } from 'src/app/common/product';
import { CustomerService } from '../customer/customer.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private customerService: CustomerService) { }

  saveToCart(product: Product, currentCustomer: Customer){
    
    this.customerService.checkCustomerInDatabase(currentCustomer.email).subscribe(
      response =>{
        this.saveProductsToDatabase(currentCustomer.email!, product);
      },
      err=>{
        console.log('You are not logged in!');
        
      }
    );
    
  }
  



  saveProductsToDatabase(email: string, product: Product) {
    this.customerService.customerSaveToCart(email, product).subscribe(
      res=>{
        console.log('Saved to database.');
        
        console.log(res);
      },
      err=>{
        console.log('Something went wrong ', err);
        
      }
    );
  }
}



