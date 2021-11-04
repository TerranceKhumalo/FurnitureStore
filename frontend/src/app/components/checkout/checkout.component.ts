import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup = this.formBuilder.group({
    customer: this.formBuilder.group({
      firstName: ['', Validators.required, Validators.minLength(3)],
      lastName: ['', Validators.required, Validators.minLength(3)],
      email: ['', Validators.required, Validators.email]
    }),
    shippingAddress: this.formBuilder.group({
      street: [''],
      city: [''],
      province: [''],
      zipCode: ['']
    }),
    paymentDetials: this.formBuilder.group({
      cardNumber: [''],
      securityCode: [''],
      expirationDate: ['']
    })
  });

  provinces = ['Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 'Limpopo', 'Mpumalanga', 'Northern Cape', 'North West'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  public onSubmit(): void{
    console.log("Handiling Checkout process.....");
    console.log(this.checkoutFormGroup.get('shippingAddress')?.value);    
  }
}
