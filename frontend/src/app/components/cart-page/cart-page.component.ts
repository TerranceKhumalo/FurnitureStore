import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/common/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  private customerData?: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.doesCustomerExists();
  }

  doesCustomerExists(){
    this.customerService.checkCustomerInDatabase('khumaloterrance@gmail.com').subscribe(
      data=>{
        this.customerData = data;
        if(this.customerData){console.log(true);}
        console.log(this.customerData);
      },
      err=>console.log('could not find customer '+ err)
    );
  }

}
