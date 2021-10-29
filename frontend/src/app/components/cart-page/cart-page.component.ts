import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cartItem';
import { Customer } from 'src/app/common/customer';
import { CartService } from 'src/app/services/cart/cart.service';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  private customerData?: Customer;
  itemsInCart: CartItem [] = []
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private customerService: CustomerService, private cartService: CartService) { }

  ngOnInit(): void {
    // this.doesCustomerExists();
    this.setCartDetails();
  }

  // doesCustomerExists(){
  //   this.customerService.checkCustomerInDatabase('khumaloterrance@gmail.com').subscribe(
  //     data=>{
  //       this.customerData = data;
  //       if(this.customerData){console.log(true);}
  //       console.log(this.customerData);
  //     },
  //     err=>console.log('could not find customer '+ err)
  //   );
  // }
  calculateItemQuantityTotal(cartItem: CartItem): number{
    if(cartItem){
      return cartItem.quantity * cartItem.unitPrice!;
    }
    return 0;
  }

  setCartDetails(){
    this.itemsInCart = this.cartService.cartItems;
//Set price total
    this.cartService.totalPrice.subscribe(
      data => {
        this.totalPrice = data;
      }
    );
//Set quantity total
    this.cartService.totalQuntity.subscribe(
      data => this.totalQuantity = data
    );
    //calculate function
    this.cartService.addCartTotal();
  }

  incrementQuantity(cartItem: CartItem){
    this.cartService.saveToCart(cartItem);
  }

  removeItemInCart(cartItem: CartItem){
    this.cartService.removeItemInCart(cartItem);
    this.setCartDetails();
  }

  decrementItemQuantity(cartItem: CartItem){
    this.cartService.decrementItemQuantity(cartItem);
  }
}
