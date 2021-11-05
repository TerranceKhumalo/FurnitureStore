import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FurniterShopValidators } from 'src/app/validators/furniterShopValidators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup = this.formBuilder.group({
    customer: this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), FurniterShopValidators.hasOnlyWhiteSpace]],
      lastName: ['', [Validators.required, Validators.minLength(3), FurniterShopValidators.hasOnlyWhiteSpace]],
      email: ['', [Validators.required, Validators.email]]
    }),
    shippingAddress: this.formBuilder.group({
      street: ['', [Validators.required, Validators.minLength(3), FurniterShopValidators.hasOnlyWhiteSpace]],
      city: ['', [Validators.required, Validators.minLength(3), FurniterShopValidators.hasOnlyWhiteSpace]],
      province: ['', [Validators.required, FurniterShopValidators.hasOnlyWhiteSpace]],
      zipCode: ['', [Validators.required, Validators.minLength(3), FurniterShopValidators.hasOnlyWhiteSpace]]
    }),
    paymentDetials: this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.minLength(8), FurniterShopValidators.hasOnlyWhiteSpace]],
      securityCode: ['', [Validators.required, Validators.minLength(3), FurniterShopValidators.hasOnlyWhiteSpace]],
      expirationDate: ['',[Validators.required, FurniterShopValidators.hasOnlyWhiteSpace]]
    })
  });

  provinces = ['  ', 'Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 'Limpopo', 'Mpumalanga', 'Northern Cape', 'North West'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  public onSubmit(): void{
    console.log("Handiling Checkout process.....");
    console.log(this.email);

    if (this.checkoutFormGroup.invalid) {
      this.checkoutFormGroup.markAllAsTouched();
    }
    
    console.log(this.checkoutFormGroup.get('shippingAddress')?.value); 
  }
//Customer getters
  get firstName(){ return this.checkoutFormGroup.get('customer.firstName');}
  get lastName(){return this.checkoutFormGroup.get('customer.lastName');}
  get email(){return this.checkoutFormGroup.get('customer.email');}
//Shipping getters
get street(){return this.checkoutFormGroup.get('shippingAddress.street');}
get city(){return this.checkoutFormGroup.get('shippingAddress.city');}
get province(){return this.checkoutFormGroup.get('shippingAddress.province');}
get zipCode(){return this.checkoutFormGroup.get('shippingAddress.zipCode');}

//Payment details getters
get cardNumber(){return this.checkoutFormGroup.get('paymentDetials.cardNumber');}
get securityCode(){return this.checkoutFormGroup.get('paymentDetials.securityCode');}
get expirationDate(){return this.checkoutFormGroup.get('paymentDetials.expirationDate');}
}
