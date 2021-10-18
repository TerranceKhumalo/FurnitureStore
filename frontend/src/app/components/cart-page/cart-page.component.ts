import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {

    this.customerService.checkCustomerInDatabase('khumaloterrance@gmail.com').subscribe(
      data=>{console.log(data);},
      err=>console.log('could not find customer '+err)
    );
  }

}
