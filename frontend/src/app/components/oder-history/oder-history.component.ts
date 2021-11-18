import { Component, OnInit } from '@angular/core';
import { OderHistory } from 'src/app/common/oder-history';
import { OrderHistoryService } from 'src/app/services/oreder-history.service';

@Component({
  selector: 'app-oder-history',
  templateUrl: './oder-history.component.html',
  styleUrls: ['./oder-history.component.css']
})
export class OderHistoryComponent implements OnInit {

  orders: OderHistory[] = [];
  storage: Storage = sessionStorage;

  constructor(private orderService: OrderHistoryService) { }

  ngOnInit(): void {
    this.handlOrderHistory();
  }
  handlOrderHistory() {
    //retrive email from session storage.
    const email = this.storage.getItem('userEmail');
    //check if email exist then call oder history
    if (email) {
      const parsedEmail = JSON.parse(email);
      this.orderService.getOderHistory(parsedEmail).subscribe(
        orderResponse=>{
          this.orders = orderResponse._embedded.orders
        }
      );
    }
    
  }

}

