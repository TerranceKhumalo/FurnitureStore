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
    let numberOfProducts =  currentCustomer.shoppingCart?.products?.push(product);
    if(numberOfProducts){
      currentCustomer.shoppingCart?.setProductQuantity(numberOfProducts);
    }
    this.customerService.updateCustomerDetails(currentCustomer).subscribe(
      res=>{
        console.log("added to cart");
      },
      err=>{
        console.log("Could not save custmoer to the database.");
      }
    );
  }
  
}
