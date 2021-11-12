import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CartItem } from 'src/app/common/cartItem';
import { Product } from 'src/app/common/product';
import { CustomerService } from '../customer/customer.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];
  CART_ITEMS_KEY = 'cartItems';
  //publish events to all subscribers.
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuntity: Subject<number> = new BehaviorSubject<number>(0);
  storage: Storage = localStorage;

  constructor(private customerService: CustomerService) {

    //Check if there is any cart items saved in the session storage
    let data = this.storage.getItem(this.CART_ITEMS_KEY);

    if(data != null){
      this.cartItems = JSON.parse(data);
      this.addCartTotal();
    }
   }

//   saveToCart(product: Product, currentCustomer: Customer, customerCartItem: CartItem){
    
//     this.customerService.checkCustomerInDatabase(currentCustomer.email).subscribe(
//       response =>{
//         this.saveProductsToDatabase(currentCustomer.email!, product);
//       },
//       err=>{
//         console.log('You are not logged in!');
        
//       }
//     );

//     let alreadyExistInCart: boolean = false;
//     let existingCartItem: CartItem | undefined;
// //Check if cart has items.
//     if (this.cartItems.length > 0) {
//       for(let tempCartItem of this.cartItems){
//         if (tempCartItem.id === customerCartItem.id) {
//           existingCartItem = tempCartItem;
//         }
//       }
//     }

//     alreadyExistInCart = (existingCartItem != undefined);
//     if(alreadyExistInCart){
//       existingCartItem!.quantity ++;
//     }else{
//       this.cartItems.push(customerCartItem);
//     }
//     this.addCartTotal();
//   }  
  //Save items to cart if exist increment quantity.
  saveToCart(customerCartItem: CartItem){
    
    let alreadyExistInCart: boolean = false;
    let existingCartItem: CartItem | undefined;
//Check if cart has items.
    if (this.cartItems.length > 0) {
      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === customerCartItem.id);
    }

    alreadyExistInCart = (existingCartItem != undefined);
    if(alreadyExistInCart){
      existingCartItem!.quantity ++;
    }else{
      this.cartItems.push(customerCartItem);
    }
    this.addCartTotal();
  }
  removeItemInCart(cartItem: CartItem){
    const removeItemIndex = this.cartItems.indexOf(cartItem);
    if (removeItemIndex != -1) {
      this.cartItems.splice(removeItemIndex, 1);
    }
    
  }

  decrementItemQuantity(cartItem: CartItem){

    cartItem.quantity --;
    
    if(cartItem.quantity == 0){
      this.removeItemInCart(cartItem);
    }
    this.addCartTotal();

  }

  addCartTotal() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (const item of this.cartItems) {
      totalPriceValue += item.quantity * item.unitPrice!;
      totalQuantityValue += item.quantity;
    }
//Publish changes to all subscribers of totalPrice and totalQuantity.
    this.totalPrice.next(totalPriceValue);
    this.totalQuntity.next(totalQuantityValue);

    this.logDataTest(totalPriceValue, totalQuantityValue);
    this.saveToStorage();
  }
  //TODO: DELETE AFTER TESTING
  logDataTest(totalPriceValue: number, totalQuantityValue: number) {
    console.log("Total price and quantity value:");
    for (const item of this.cartItems) {
      const subTotal = item.quantity * item.unitPrice!;
      console.log(`Name ${item.name} , quantity: ${item.quantity} and price: ${item.unitPrice} Total cost: ${subTotal.toFixed(2)}`);
    }
    console.log(`Total Price Value: ${totalPriceValue.toFixed(2)} and Total Quantity Value: ${totalQuantityValue}`);
  }

  private saveToStorage(){
    this.storage.setItem(this.CART_ITEMS_KEY, JSON.stringify(this.cartItems));
  }


  saveProductsToDatabase(email: string, product: Product) {
    this.customerService.customerSaveToCart(email, product).subscribe(
      res=>{
        console.log('Saved to database.');
        
        console.log(res);
      },
      err=>{
        console.log('Something went wrong.', err);
        
      }
    );
  }
}



