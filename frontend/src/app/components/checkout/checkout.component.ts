import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup = this.formBuilder.group({
    customer: this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: ['']
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
