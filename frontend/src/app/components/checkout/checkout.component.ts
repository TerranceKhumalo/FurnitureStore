import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemToPurchase } from 'src/app/common/item-to-purchase';
import { Order } from 'src/app/common/order';
import { Purchase } from 'src/app/common/purchase';
import { CartService } from 'src/app/services/cart/cart.service';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';
import { FurniterShopValidators } from 'src/app/validators/furniterShopValidators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  totalPrice: number = 0;
  totalQuntity: number = 0;
  private storage: Storage = sessionStorage;

  customerEmail = JSON.parse(this.storage.getItem('userEmail')!);

  checkoutFormGroup = this.formBuilder.group({
    customer: this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), FurniterShopValidators.hasOnlyWhiteSpace]],
      lastName: ['', [Validators.required, Validators.minLength(3), FurniterShopValidators.hasOnlyWhiteSpace]],
      email: [this.customerEmail, [Validators.required, Validators.email]]
    }),
    shippingAddress: this.formBuilder.group({
      streetName: ['', [Validators.required, Validators.minLength(3), FurniterShopValidators.hasOnlyWhiteSpace]],
      city: ['', [Validators.required, Validators.minLength(3), FurniterShopValidators.hasOnlyWhiteSpace]],
      country: ['', [Validators.required, Validators.minLength(3), FurniterShopValidators.hasOnlyWhiteSpace]],
      state: ['', [Validators.required, FurniterShopValidators.hasOnlyWhiteSpace]],
      zipCode: ['', [Validators.required, Validators.minLength(3)]]
    }),
    paymentDetials: this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16), FurniterShopValidators.hasOnlyWhiteSpace]],
      securityCode: ['', [Validators.required, Validators.minLength(3), FurniterShopValidators.hasOnlyWhiteSpace]],
      expirationDate: ['', [Validators.required, FurniterShopValidators.hasOnlyWhiteSpace]]
    })
  });

  provinces = ['  ', 'Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 'Limpopo', 'Mpumalanga', 'Northern Cape', 'North West'];

  constructor(private formBuilder: FormBuilder, private cartService: CartService, private checkout: CheckoutService, private router: Router) { 

  }


  ngOnInit(): void {
    this.reviewCartDetails();
  }

  public onSubmit(): void {
    console.log("Handiling Checkout process.....");
    console.log(this.email);

    if (this.checkoutFormGroup.invalid) {
      this.checkoutFormGroup.markAllAsTouched();
      return;
    }
    this.handleFormSubmition();
    // console.log(this.checkoutFormGroup.get('shippingAddress')?.value);
  }
  //Collect all data from the form and assign it to objects to be sent to the database.
  handleFormSubmition(){
    //Assign current total price and quantity to new order object.
    const order = new Order();
    order.totalPrice = this.totalPrice;
    order.totalQuantity = this.totalQuntity;
//Retrieve all items in the cart and add them to purchase item to be sent to the database. 
    const itemsToPurchase: ItemToPurchase[] = this.cartService.cartItems.map(item=>new ItemToPurchase(item));

  //Create purchase object and assign custom fields
  const purchase = new Purchase();

  purchase.customer = this.checkoutFormGroup.get('customer')?.value;
  
  //Assgin shipping address to purchase object
  purchase.shippingAddress = this.checkoutFormGroup.get('shippingAddress')?.value;

    //Assgin orders to purchase object
    purchase.order = order;

  //Assgin items To Purchase to purchase object
  purchase.itemsToPurchase = itemsToPurchase;

  if (this.totalQuntity > 0) {
    this.checkout.placeOrder(purchase).subscribe(
      response=>{
        alert(`Your order was successful.\n Your order tracking number is: ${response.orderTrackingNumber}`)
        this.restCart();
      },
      err=>{
        alert(`Your order was unsuccessful, the was an error.\n Error: ${err.message}`)
      }
    );
  }

  console.log(purchase);
  }

  //Rest all values to thier default values
  restCart() {
    this.cartService.cartItems = [];
    this.cartService.totalPrice.next(0);
    this.cartService.totalQuntity.next(0);

    this.checkoutFormGroup.reset();

    this.router.navigateByUrl("/orders")
  }


  reviewCartDetails() {
    this.cartService.totalPrice.subscribe(
      totalPrice => this.totalPrice = totalPrice
    );

    this.cartService.totalQuntity.subscribe(
      totalQuntity => this.totalQuntity = totalQuntity
    );
  }
  //Customer getters
  get firstName() { return this.checkoutFormGroup.get('customer.firstName'); }
  get lastName() { return this.checkoutFormGroup.get('customer.lastName'); }
  get email() { return this.checkoutFormGroup.get('customer.email'); }
  //Shipping getters
  get streetName() { return this.checkoutFormGroup.get('shippingAddress.streetName'); }
  get city() { return this.checkoutFormGroup.get('shippingAddress.city'); }
  get state() { return this.checkoutFormGroup.get('shippingAddress.state'); }
  get zipCode() { return this.checkoutFormGroup.get('shippingAddress.zipCode'); }
  get country() { return this.checkoutFormGroup.get('shippingAddress.country'); }

  //Payment details getters
  get cardNumber() { return this.checkoutFormGroup.get('paymentDetials.cardNumber'); }
  get securityCode() { return this.checkoutFormGroup.get('paymentDetials.securityCode'); }
  get expirationDate() { return this.checkoutFormGroup.get('paymentDetials.expirationDate'); }
}
